
//import puppeteer from 'puppeteer';
//TODO: This is not necessary, we can use the puppeteer module directly.
export const getOptions = async () => {
    
  if(!process.env.PROD) return { headless: false }


    const options = {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        ignoreDefaultArgs: ['--disable-extensions'],
        headless: true,
        ignoreHTTPSErrors: true,
    }
    
    return options;
  
}


