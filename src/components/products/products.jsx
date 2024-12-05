import React, { useState, useEffect } from "react";
import "./products.css";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Products = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await supabase
      .from("products")
      .select()
      .eq("enable", true);
    const productsImg = data.map((item) => ({
      id: item.sku,
      name: item.name,
      url: item.imageurl,
    }));
    setItems(productsImg);
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
