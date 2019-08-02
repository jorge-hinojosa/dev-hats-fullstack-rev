require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session');

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

//Controllers
const PC = require('./controllers/product_controller');
const CC = require('./controllers/cart_controller');
const AC = require('./controllers/auth_controller');

//Middlewares
const CM = require('./middlewares/cart_middlewares');
const AM = require('./middlewares/auth_middlewares');

const app = express();

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
    console.log("DB connected")
  })
  .catch(err => console.log(err))

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(express.json());

//Product Endpoints
app.get('/api/products', PC.getAllProducts);

//Cart Endpoints
app.use(CM.checkForCart)
app.get('/api/cart', CC.getCart)
app.post('/api/cart', CC.addToCart);
app.delete('/api/cart/:id', CC.removeFromCart)

//Auth Endpoints
app.use(AM.checkForUser)
app.post('/auth/register', AC.register)
app.get('/auth/checkout', AC.checkout)

app.listen(SERVER_PORT, () => console.log(`yooooo i'm on port ${SERVER_PORT}`));
