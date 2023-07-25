import * as Path from 'node:path'

import express from 'express'

import fruitRoutes from './routes/fruits.ts'

const server = express()

server.use(express.json())
// server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)

// server.get('*', (req, res) => {
//   res.sendFile(join(__dirname, 'public/index.html'))
// })
if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}
export default server
