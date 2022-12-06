// import logo from './logo.svg';    <img src={logo} className="App-logo" alt="logo" />
import './App.css';
import {NavLink, Route, BrowserRouter, Routes} from 'react-router-dom';
//import {react, Component} from 'react';
import About from './components/About.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import { Component } from 'react';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">
          <div>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/contact'>Contacts</NavLink></li>
            </ul>
          </div>
          <Routes>
            <Route exact path='/' element={<Home />} /> 
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>

      </div>
    </BrowserRouter>
  );
}}

export default App;
