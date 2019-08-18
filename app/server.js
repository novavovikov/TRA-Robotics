const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('routing.json')
const middlewares = jsonServer.defaults({
  static: './dist'
})

server.use(middlewares)
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
