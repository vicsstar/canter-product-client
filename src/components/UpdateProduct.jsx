import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import DetailEntry from './DetailEntry';
import * as types from '../action-types';
import './UpdateProduct.css';

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      code: '',
      price : '',
      details: []
    };
    this.onChange = this.onChange.bind(this);
    this.onDetailChange = this.onDetailChange.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
  }

  onDetailChange(detail) {
    // filter out the passed in detail object.
    const _details = this.state.details.filter(d => d.id !== detail.id);

    // update the list of details.
    this.setState(() => ({ details: [..._details, detail] }));
  }

  onChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  saveProduct(e) {
    e.preventDefault();
    // get our form data out of state.
    const { name, category, code, price, details } = this.state;

    this.props.saveProduct({
      name, category, code, price: Number(price),
      details: details
        .filter(d => d.key !== '' && d.value !== '')
        .map(d => { delete d.id; return d; })
    });
  }

  componentWillUpdate(nextState) {
    // We just updated the product and it was successful. Leave the window.
    if (nextState.productUpdated) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.notifyLeave();
  }

  render() {
    return (
      <div>
        <div className="clearfix">
          <h2 className="pull-left">UPDATE PRODUCT</h2>
          <div className="alert alert-danger pull-right">
            <strong>Warning!</strong> 0 Online user(s).
          </div>
        </div>
        <div className="row"> 
          <div className="col-md-3">
            <div className="thumbnail">
              <img src="/images/product.png" alt=""/>
            </div>
          </div>
          <div className="col-md-9 clearfix">
            <form className="form-horizontal" onSubmit={this.saveProduct}>
              <div className="well update-product-form">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="name" required
                                id="name" placeholder="CanterBook UberPro" onChange={this.onChange}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="category" className="col-sm-2 control-label">Category</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="category" required
                                id="category" placeholder="Category" onChange={this.onChange}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-md-offset-1">
                    <div className="form-group">
                      <label htmlFor="code" className="col-sm-2 control-label">Code</label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" name="code" required
                                id="code" placeholder="Code" onChange={this.onChange}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="price" className="col-sm-2 control-label">Price</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="price" required
                                id="price" placeholder="Price" onChange={this.onChange}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row detail-section">
                  <div className="col-md-12">
                    <h5 className="pull-left">ADD DETAILS</h5>
                    <button type="button" className="btn btn-success btn-sm pull-right" title="Add extra detail"
                            onClick={() => this.setState({
                              details: [...this.state.details, {id: Math.random()}]
                            })}>
                      + add detail
                    </button>
                  </div>
                </div>
                <hr style={{marginTop: 0}}/>
                <div className="row">
                  <div className="col-md-12">
                    {this.state.details.map(detail => (
                      <DetailEntry key={detail.id} detail={detail} onChange={this.onDetailChange} />
                    ))}
                  </div>
                </div>
                <div className="row form-footer">
                  <div className="col-md-12 col-md-offset-2">
                    <button type="submit" className="btn btn-primary btn-md submit-button">SAVE</button>
                    &nbsp;
                    <Link to="/" className="btn btn-default btn-md">Back</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productUpdated: state.productUpdated
});

const mapDispatchToProps = (dispatch) => ({
  saveProduct: (product) => dispatch({
    type: types.UPDATE_PRODUCT,
    product
  }),
  notifyLeave: () => dispatch({
    type: types.LEAVING_PRODUCT_SCREEN
  })
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateProduct));
