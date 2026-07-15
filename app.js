import router from './routes/routes.js';
import express from 'express';
const app = express()
const port = 3000


app.use('/', router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
