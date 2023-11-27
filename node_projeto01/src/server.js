import http from 'node:http'

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.end("Listando usuários")
  }

  if (method === 'POST' && url === '/users') {
    return res.end("Criando um usuário")
  }
  return res.end("Oi, amigos")
})

server.listen(3333)