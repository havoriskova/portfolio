// import logo from './logo.svg';    <img src={logo} className="App-logo" alt="logo" />
import './App.css';
import {NavLink, Route, BrowserRouter, Routes} from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import { Component } from 'react';
import Loader from './components/Loader';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.myPage = (<BrowserRouter>
      <div className="App">
          <header>
            <nav>
              <div className='logo'><NavLink to='/'>Logo</NavLink></div>
              <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contacts</NavLink></li>
              </ul>
            </nav>
          </header>
          
          <main>
            <Routes>
              <Route exact path='/' element={<Home />} /> 
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
  
          <aside><p>content</p></aside>
  
          <footer><p>Coded by Hana</p></footer>
      </div>
    </BrowserRouter>);
  }


  render() {

    if ( this.state.isLoading ) {
      {setTimeout(()=> {this.setState(state => ({
        isLoading: false
      }))}, 2000)}
      return <Loader />
    } else {
    return (
      this.myPage
    );};
    
}}

export default App;
