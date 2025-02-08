import { ProductStore } from "../factorys/StoreFactory";


type ProductsGroupedByBranch = Record<string, ProductStore[]>;

class GroupByBranchRecord {
  record: ProductsGroupedByBranch = {}

  pushNewProduct(branch: string, product: ProductStore) {

    const productBranch = branch.toLowerCase().trim()

    if (!this.record[productBranch]) {
      this.record[productBranch] = []
    }
    this.record[productBranch].push(product)
  }

  getBranches() {
    return Object.keys(this.record)
  }

  getRecord() {
    return this.record
  }

  getSize() {
    return Object.keys(this.record).length
  }

}

export const groupByBranchRecord = new GroupByBranchRecord()