const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

dotenv.config();

app.listen(process.env.BACKEND_PORT || 5000, () => {
    console.log('Server is running!')
})

mongoose
    .connect(process.env.MONGO_URL_CONNECT)
    .then(() => console.log('Database Connection Successful'))
    .catch((err) => console.log(err))

app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
