import { ProductStore, Store } from "../factories/StoreFactory";
import { randomUUID } from 'crypto';
import {puppeteerPromise} from "../puppeteer/config"; 

const URL_PAGE = "https://www.farmatodo.com.co/categorias/dermocosmetica/facial"

/**
 * TODO: La página pagina los productos, hay que buscar la forma de traerlos todos.
 * @returns 
 */
const getProductsOfWeb = async (): Promise<ProductStore[]> => {
  const puppeteer = await puppeteerPromise;
  let listOfProducts = []
  const browser = await puppeteer.launch({
    headless: false,

  })
  const page = await browser.newPage()
  await page.goto(URL_PAGE, {})
  await page.waitForSelector('.content-product')

  const productsContent = await page.$$('.content-product')

  for (const product of productsContent) {
    //@ts-ignore
    const { name, branch, price } = await page.evaluate((el) => {
      const productName = el.querySelector("div.text-left.info > p.text-title")?.textContent || ""
      const productBranch = el.querySelector("div.text-left.info > p.text-brand")?.textContent || ""
      const productPrice = el.querySelector("div.price.text-left > p > span")?.textContent || ""

      return Promise.resolve({ name: productName, branch: productBranch, price: productPrice })

    }, product).catch(() => { 
      throw new Error("Error in the page Farmatodo")
    }) || {}

    if (!!!name || !!!price) continue;
    const newProduct: ProductStore = {
      id: randomUUID().toString(),
      name,
      price,
      branch
    }
    listOfProducts.push(newProduct)

  }
  browser.close()
  return Promise.resolve(listOfProducts)


}

class FarmatodoStorage implements Store {
  protected products: ProductStore[] = []

  async getProducts(): Promise<ProductStore[]> {
    //throw new Error("Method not implemented.");
    if (this.products.length !== 0) return this.products
    const products = await getProductsOfWeb()
    return products

  }


}

export const farmatodoStorage = new FarmatodoStorage()
