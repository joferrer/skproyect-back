import Router from "express";
import { getProductsGroupByBranch } from "./Stores";

//ROUTER FOR -- /products
const router = Router()


router.get('/', async (_req, res) => {
    res.send('Products route working')
})

router.get('/bybranch', async (_req, res) => {
    const productByBranch = await getProductsGroupByBranch().catch((err) => {
        console.error(err)
        res.status(500).send("Opps something went wrong! :(")
    })
    res.send(JSON.stringify(productByBranch))
})

export default router;