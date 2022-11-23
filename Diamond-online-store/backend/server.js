import express from 'express';
import cors from 'cors';
import data from './data.js';
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}/api/products`);
});
