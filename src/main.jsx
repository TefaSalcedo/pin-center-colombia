import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/navBar.jsx"
import Home from './components/home/home.jsx'
import Products from "./components/products.jsx"
import PropTypes from 'prop-types';

import Footer from "./components/footer.jsx"
import "./App.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App/>
    <Home/> 
    <Products/>


    <Footer/>
    </>
  </React.StrictMode>,
)
