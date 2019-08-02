import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../../redux/reducers/productReducer'
import {addToCart, fetchCart} from '../../redux/reducers/cartReducer'
import './ProductList.scss'


class ProductList extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
    this.props.fetchCart();
  }
  render() {
    console.log(this.props);
    const {loading, products, addToCart} = this.props;
    return (
      <div className='productlist-cont'>
        {
          loading
          ? <h1>Loading...</h1>
          : products.map(product =>  {
            return (
              <div className='product' key={product.id}>
                <img src={product.img_url} alt={product.product_name}/>
                <h2>#{product.id} {product.product_name}</h2>
                <span>
                  <button onClick={() => addToCart(product)}>Add To Cart</button>
                  <h3>${product.price}</h3>
                </span>
              </div>
            )
          })
            
        }
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    cart: reduxState.cartReducer.cart,
    products: reduxState.productReducer.products,
    loading: reduxState.productReducer.loading
  }
}

export default connect(mapStateToProps, {fetchAllProducts, addToCart, fetchCart})(ProductList);
