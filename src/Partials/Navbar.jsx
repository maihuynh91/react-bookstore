import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {ShoppingCart} from '../ShoppingCart/ShoppingCart';
import {Home} from '../Home/Home';
import {BookList} from '../BookList/BookList';

export class Navbar extends Component{
    render(){
        return(
            <Router>
              <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <Link className="navbar-brand" to="/">Bookstore</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          
          <li className="nav-item">
              <Link className="nav-link" to="/shoppingcart">Shopping Cart</Link>
          </li>

          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
              <Link className="nav-link" to="/books">Books</Link>
          </li>

    
            <li className="nav-item">
              <Link className="nav-link" to="/users/sign_up">Sign up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users/sign_in">Sign in</Link>
            </li>
        
          
       
        </ul>
      </div>
    </div>
  </nav>

  <hr />
  <Route exact path='/' component={Home} />
  <Route  path='/books' component={BookList} />
  <Route  path='/shoppingcart' component={ShoppingCart} />
  </div>
            </Router>
            
        )
    }
}