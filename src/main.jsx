import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/navBar.jsx"
import Home from './components/home.jsx'

import Footer from "./components/footer.jsx"
import "./App.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App/>
    <Home/>

    <Footer/>
    </>
  </React.StrictMode>,
)
