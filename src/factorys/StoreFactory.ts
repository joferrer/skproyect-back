export interface ProductStore {
  id: string,
  name: string,
  price: string
  branch?: string
}

export interface Store {

  getProducts(): Promise<ProductStore[]>;
}
