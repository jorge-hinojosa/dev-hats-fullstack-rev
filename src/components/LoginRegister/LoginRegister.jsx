import React, { Component } from 'react'
import './LoginRegister.scss'
import axios from 'axios'

class LoginRegister extends Component {
  constructor() {
    super() 
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  register = e => {
    e.preventDefault();
    const {firstName, lastName, username, password} = this.state;
    axios.post('/auth/register', {firstName, lastName, username, password})
      .then(() => {
        alert("You are registered!");
        this.props.history.goBack();
      })
      .catch(err => console.log(err))
  }
  render() {
    console.log(this.props)
    return (
      <div className='login-cont'>
        <h1>Login / Register</h1>
        <form onSubmit={this.register}>
          <input onChange={this.handleChange} name='firstName' type="text" placeholder='First Name'/>
          <input onChange={this.handleChange} name='lastName' type="text" placeholder='Last Name'/>
          <input onChange={this.handleChange} name='username' type="text" placeholder='Username'/>
          <input onChange={this.handleChange} name='password' type="password" placeholder='Password'/>
          <button type='submit'>Register</button>
        </form>
      </div>
    )
  }
}

export default LoginRegister;
