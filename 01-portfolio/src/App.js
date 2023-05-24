// import logo from './logo.svg';    <img src={logo} className="App-logo" alt="logo" />
import './App.css';
import {NavLink, Route, BrowserRouter, Routes} from 'react-router-dom';
import Projects from './components/Projects.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Thanks from './components/Thanks.js';
import { Component } from 'react';
import Loader from './components/Loader';
import RandomBackground from './hoc/RandomBackground';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.toggle = (e) => {e.target.classList.toggle('active')};
    this.myPage = (<BrowserRouter>
      <div className="App">
          <header>
            <div className='nav-icon active' onClick={this.toggle}>X</div>
            <nav>
              <div className='logo'><NavLink to='/'>Logo</NavLink></div>
              <ul className='nav-ul'>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                {/* <li className='logo-li'><NavLink to='/home'>logo</NavLink></li> */}
              </ul>
            </nav>
          </header>
          
          <main>
            <Routes>
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/' element={<Home />} /> 
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/thanks' element={<Thanks />} />
            </Routes>
          </main>
  
          <aside><p>aside</p></aside>
  
          <footer>
            <p>Coded by <a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US" rel="noreferrer" target='_blank'>Hana Voriskova</a>
            </p>
          </footer>
      </div>
    </BrowserRouter>);
  }


  render() {

    // console.log(window);
    //console.log(window.document.URL);
    let isThanksPage = window.document.URL.includes('thanks');

    if ( this.state.isLoading && !isThanksPage) {
      setTimeout(()=> {this.setState(state => ({
        isLoading: false
      }))}, 2000) // 4000
      return <Loader />
    } else {
      return (
        this.myPage
      );
    };
    
}}

export default RandomBackground(App);
