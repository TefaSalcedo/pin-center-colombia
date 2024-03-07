import React from "react";
import "./products.css";
import PropTypes from 'prop-types';

const Products = () => {
 
  return (
    <div className="container-products">
      <h1>Nuestros productos</h1>
      <Grid>
        {products.map((product) => (
          <Product key={product.id} id={product.id} image={product.image} description={product.description} />
        ))}
      </Grid>
    </div>
  );
};
export default Products;

const Grid = ({ children }) => {
    return <div className="grid">{children}</div>;
  };

  Grid.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const Product = ({ id, image, description }) => {
    return (
      <div className="product">
        <img src={image} alt={`producto-${id}`} />
        <span className="product-id">{description}</span>
      </div>
    );
  };
  
  Product.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };


  const products = [
    { id: 1, image: 'https://via.placeholder.com/100?text=1', description: 'Producto 1' },
    { id: 2, image: 'https://via.placeholder.com/100?text=2', description: 'Producto 2' },
    { id: 1, image: 'https://via.placeholder.com/100?text=1', description: 'Producto 1' },
    { id: 2, image: 'https://via.placeholder.com/100?text=2', description: 'Producto 2' },
    { id: 1, image: 'https://via.placeholder.com/100?text=1', description: 'Producto 1' },
    { id: 2, image: 'https://via.placeholder.com/100?text=2', description: 'Producto 2' },
    { id: 1, image: 'https://via.placeholder.com/100?text=1', description: 'Producto 1' },
    { id: 2, image: 'https://via.placeholder.com/100?text=2', description: 'Producto 2' },
    //...
  ];