import http from 'node:http'

const server = http.createServer((req, res) => {
  return res.end('Oi, Grazi')
})

server.listen(3333)