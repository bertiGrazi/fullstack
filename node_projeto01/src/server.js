import http from 'node:http'
import { Database } from './database/database.js'
import { json } from './middlewares/json.js'

const database = new Database()

const server = http.createServer(async (req, res) => {
  const { method, url } = req
 
  await json(req, res)
  

  return res.writeHead(404).end()
})

server.listen(3333)