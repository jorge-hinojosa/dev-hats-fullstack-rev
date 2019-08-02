module.exports = {
  addToCart: (req, res) => {
    const {product} = req.body;
    req.session.cart = [product, ...req.session.cart];
    // console.log(req.session.cart);
    res.status(200).json(req.session.cart);
  },
  getCart: (req, res) => {
    res.status(200).json(req.session.cart)
  },
  removeFromCart: (req, res) => {
    const {id} = req.params;
    const index = req.session.cart.findIndex(product => id == product.id)
    req.session.cart.splice(index, 1);
    res.status(200).json(req.session.cart);
  }
}