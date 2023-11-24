import http from 'http'

const server = http.createServer((req, res) => {
  return res.end('Oi, Grazi')
})

server.listen(3333)