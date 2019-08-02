import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  constructor() {
    super ()
    this.state = {
      menuOpen: false
    }
  }
  toggleMenu = () => {
    const {menuOpen} = this.state;
    menuOpen ? 
      this.setState({menuOpen: false})
      : this.setState({menuOpen: true})
  }
  render() {
    return (
      <div className='header-cont'>
        <div>
          <h1>DevHats</h1>
          <i onClick={this.toggleMenu} className='material-icons'>menu</i>
        </div>
        {
          this.state.menuOpen ?
          (
            <nav>
              <div>
                <Link onClick={this.toggleMenu} className='menu-links' to='/'>
                  <p>Home</p>
                </Link>
                <Link onClick={this.toggleMenu} className='menu-links' to='/login'>
                  <p>Login / Register</p>
                </Link>
                <Link onClick={this.toggleMenu} className='menu-links' to='/cart'>
                  <p>Cart</p>   
                </Link>
              </div>
            </nav>
          ) : null
        }
        
      </div>
    )
  }
}
