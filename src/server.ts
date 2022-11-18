import { Request, Response } from 'express';
import routerCategories from './routes/categories.routes';
import routerOrder from './routes/orders.routes';
import routerProducts from './routes/products.routes';
import routerUser from './routes/users.routes';

// Importing all routes
const express = require('express');

const app = express();
const port = 3000;

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3001/',
  optionSuccessStatus: 200,
  preflightContinue: false,
};

app.use((req:Request, res:Response, next:Function) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// Use of all routes called above
app.use('/user', routerUser);
app.use('/product', routerProducts);
app.use('/order', routerOrder);
app.use('/categories', routerCategories);
app.options('*', cors(corsOptions)); // Enable pre-flight

app.listen(port, () => {
  console.log(`Example router listening on port ${port}`);
});
