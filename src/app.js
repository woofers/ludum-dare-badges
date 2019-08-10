import express from 'express'
import bodyParser from 'body-parser'

import env from './env'
import routes from './routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);
})
