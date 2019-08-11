import large from './controllers/large'

export default route => {
  route.get('/', (req, res) => res.send('Read the docs ...'))
  route.get('/:id/:game', large)
  route.get('/large/:id/:game', large)
}
