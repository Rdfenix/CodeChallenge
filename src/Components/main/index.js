import './main.css';
import React, { Component } from 'react';
import Card from '../card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { getProducts } from '../../actions/products';

const baseUrl = 'http://localhost:3004/products';

class Main extends Component {
  componentDidMount() {
    axios(baseUrl).then(response => {
      if (response && response.data) {
        let products = response.data;
        this.props.getProducts(products);
      }
    });
  }

  render() {
    return (
      <div className='container'>
        <Card />
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
