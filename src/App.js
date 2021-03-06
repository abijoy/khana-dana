
import React from 'react'
import logo from './logo-web-color.png'
import asd from './asd-4.jpg'
import Home from './components/Home'
import Products from './components/Products'
import Location from './components/Location'
import LocationEmbed from './components/LocationEmbed'
import Footer from './components/Footer'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";


function App() {
  const imgStyle = {
    height: 100,
    width: 120
  }
  return (
    <Router>
      <div className='holder mx-auto'>
        <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
          <Link className="navbar-brand" to="/">
              <img src={logo} style={imgStyle}/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
        <div className={`collapse navbar-collapse`} id='navbarSupportedContent'>
          <ul className={`navbar-nav mr-auto`}>
            <li className={`nav-item`}>
                <Link to='home' className='nav-link'>HOME</Link>
            </li>
            <li className={`nav-item`}>
                <Link to='products' className='nav-link'>PRODUCTS</Link>
            </li>
            <li className={`nav-item`}>
                <Link to='locations' className='nav-link'>LOCATIONS</Link>
            </li>
            <li className={`nav-item`}>
                <Link to='about' className='nav-link'>ABOUT KHANAS</Link>
            </li>
          </ul>
            </div>
        </nav>
      </div>
        <Switch>
          <Redirect exact from='/' to={'/home'}/>
          <Route path='/home/'>
            <Home />
          </Route>

          <Route path="/products">
            <Products />
          </Route>

          <Route path="/locations">
            <LocationEmbed />
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
