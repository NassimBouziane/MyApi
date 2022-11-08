import routerCategories from './routes/categories.routes';
import routerOrder from './routes/orders.routes';
import routerProducts from './routes/products.routes';
import routerUser from './routes/users.routes';
// eslint-disable-next-line prefer-const
let express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/user', routerUser);
app.use('/product', routerProducts);
app.use('/order', routerOrder);
app.use('/categories', routerCategories);

app.listen(port, () => {
  console.log(`Example router listening on port ${port}`);
});
