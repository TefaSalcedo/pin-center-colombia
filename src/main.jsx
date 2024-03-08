import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from "./components/navBar/navBar.jsx"
import Home from './components/home/home.jsx'
import Products from "./components/products/products.jsx"
// import PropTypes from 'prop-types';
import Footer from "./components/footer/footer.jsx"
import "./App.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <NavBar/>
    <Home/> 
    <Products/>
    <Footer/>
    </>
  </React.StrictMode>,
)
