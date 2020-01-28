import './card.css';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const listCards = products =>
  products.map(product => (
    <li key={product.id} className='cards-item'>
      <div className='card'>
        <div className='card-image'>
          <img src={product.url} />
        </div>
        <div className='card-content'>
          <h2 className='card-title'>{product.title}</h2>
          <span className='unity-product'>
            {product.unity} Unit - {product.description}
          </span>
          <span className='valeu-product'>{product.unityValue}</span>
          <span className='promotion-product'>{product.promotion}</span>
          <a
            href='#'
            target='_blank'
            className='product-details'
            rel='noopener noreferrer'
          >
            View Detail
          </a>
        </div>
        <div className='card-footer'>
          <div className='row'>
            <a className='count-button'> - </a>
            <span className='count'>4</span>
            <a className='count-button'> + </a>
          </div>
          <div className='row'>
            <a className='add-button'> ADD </a>
          </div>
        </div>
      </div>
    </li>
  ));

const card = props => {
  const { products } = props;
  return <ul className='cards'>{listCards(products)}</ul>;
};

const mapStateToProps = state => ({
  products: state.product
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(card);
