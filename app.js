import router from './routes/routes.js';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const openapiDoc = JSON.parse(readFileSync(join(__dirname, 'openapi.json'), 'utf8'));

const app = express()
const port = 3000

app.use(express.json())


app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiDoc));
app.use('/', router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
