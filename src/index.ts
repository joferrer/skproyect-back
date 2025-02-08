//import pc from 'picocolors'
import express from 'express'
import { getProductsGroupByBranch } from './stores/Stores'

const app = express()

app.disable('x-powered-by')
app.use(express.json())

const PORT = process.env.PORT ?? 3000

app.use((_req, _res, next) => {
  next()
})

app.get('/', async (_req, res) => {
  const productByBranch = await getProductsGroupByBranch()
  res.send(JSON.stringify(productByBranch))

})

app.use((_req, res) => {
  res.status(404).send('Ops, esta página no existe :0')
})

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`)
})