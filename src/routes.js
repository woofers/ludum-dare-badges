
export default route => {
  route.get('/', (req, res) => {
    res.send('Hello');
    res.end()
  })
}
