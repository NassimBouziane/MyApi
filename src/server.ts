// eslint-disable-next-line prefer-const
let express = require('express');

const app = express();
const port = 3000;
const userRoute = require('./routes/users.routes');
const categoriesRoute = require('./routes/categories.routes');
const productsRoute = require('./routes/products.routes');
const ordersRoute = require('./routes/orders.routes');

app.use('/user', userRoute);
app.use('/product', productsRoute);
app.use('/order', ordersRoute);
app.use('/categories', categoriesRoute);

app.listen(port, () => {
  console.log(`Example router listening on port ${port}`);
});
