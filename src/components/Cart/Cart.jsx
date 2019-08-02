import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../../redux/reducers/cartReducer'
import './Cart.scss'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class Cart extends React.Component {
  constructor() {
    super() 
    this.state = {
      user: []
    }
  }

  renderRedirect = () => {
    if (this.state.loggedIn === true) {
      return <Redirect to='/checkout' />
    }
  }

  handleClick = () => {
    axios.get('/auth/checkout')
      .then(res => console.log(res))
  }
  
  render () {
    let subtotal = this.props.cart.reduce((acc, product) => {
      return acc += Number(product.price);
    }, 0);
  
    let products = this.props.cart.map(product => (           
      <div className='product' key={product.id}>
        <img src={product.img_url} alt={product.product_name}/>
        <h2>#{product.id} {product.product_name}</h2>
        <span>
          <button onClick={() => this.props.removeFromCart(product.id)}>Remove</button>
          <h3>${product.price}</h3>
        </span>
      </div>
    ))
  
      return (
        <div className='cart-cont'>
         {
           this.props.cart.length === 0
           ? <h1>Add items to your cart!</h1>
           : (
            <div>
              <h1>Subtotal: ${subtotal}</h1>
              {products}
              <button onClick={this.handleClick}>CHECKOUT</button>
            </div>
           )
         }
  
        </div>
      )
    
  }

  }


const mapStateToProps = reduxState => {
  return {
    cart: reduxState.cartReducer.cart
  }
}
export default connect(mapStateToProps, {removeFromCart})(Cart);
