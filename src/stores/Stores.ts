import { farmatodoStorage } from "./FarmatodoStore"
import { groupByBranchRecord } from "./GroudByBranchRecord"



export const getProductsGroupByBranch = async () => {
  if (groupByBranchRecord.getSize() === 0) {
    const farmatodoProducts = await farmatodoStorage.getProducts()
    farmatodoProducts.forEach(e => {
      if (e.branch) groupByBranchRecord.pushNewProduct(e.branch, e)
    })

  }
  return groupByBranchRecord.getRecord()
}