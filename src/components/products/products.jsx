import React, { useState, useEffect } from "react";
import "./products.css";
const Products = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://can.canonic.dev/my-new-project-4130d3/api/productos`
      );
      const { data } = await response.json();
      const productsImg = data.datos.listado.map((item) => ({
        id: item.codigo,
        name: item.nombre,
        url: item.imagenUrl,
      }));
      setItems(productsImg);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container-products">
      <h1>Nuestros productos</h1>
        <ol className="list-products">
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.url} alt={item.name} />
            <span>{item.id}</span>
          </li>
        ))}
        </ol>
    </div>
  );
};

export default Products;
