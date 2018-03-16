import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-custom navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/">List <span className="sr-only">(current)</span></a></li>
                <li><a href="/create-product">Create</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="jumbotron canter-header">
          <div className="container">
            <br/>
            <h1>Canter Oy</h1>
            <h4>Product editor</h4>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <Route exact path="/" component={ProductList} />
            <Route exact path="/create-product" component={CreateProduct} />
            <Route exact path="/products/:id" component={UpdateProduct} />
          </div>
          <footer className="footer">
              <p className="text-muted">&copy; Canter Oy</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(() => ({}))(App));
