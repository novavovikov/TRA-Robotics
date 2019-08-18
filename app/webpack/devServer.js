module.exports = () => ({
  stats: 'errors-only',
  hot: true,
  historyApiFallback: true,
  host: 'localhost',
  port: 4000,
  proxy: {
    '/api': 'http://localhost:3000/api/assembly',
  },
})
