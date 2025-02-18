//import pc from 'picocolors'
import express from 'express'
import StoreRouter from './stores/Storesrouter'
//import { getProductsGroupByBranch } from './stores/Stores'

const app = express()

app.disable('x-powered-by')
app.use(express.json())

const PORT = process.env.PORT ?? 3000

//MIDELWARE EXAMPLE
app.use((_req, _res, next) => {
  next()
})

app.get('/', async (_req, res) => {
  res.send(`Welcome to the store API ${process.env.PROD ? 'PROD' : 'DEV'}`)
})

app.use('/products', StoreRouter)

app.use((_req, res) => {
  res.status(404).send('Ops, esta página no existe :0')
})

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}: https:localhost:${PORT}`)
})