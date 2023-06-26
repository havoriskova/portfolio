import './App.css';
import {NavLink, Route, BrowserRouter, Routes} from 'react-router-dom';
import Projects from './components/Projects.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Thanks from './components/Thanks.js';
import { Component } from 'react';
import Loader from './components/Loader';
import RandomBackground from './hoc/RandomBackground';
import Footer from './components/Footer';
import logo from './img/voriskova_1_rem.png';
import homeNav from './img/HOME_1_rem.png';
import projectsNav from './img/projects_1_rem.png';
import contactNav from './img/contact_1_rem.png'; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.toggle = (e) => {
      e.target.classList.toggle('active');
    };
    this.removeActiveNav = (e) => {setTimeout(() => {
      document.getElementById('toggleNavButton').classList.remove('active')}, 0)};
    this.myPage = (<BrowserRouter>
      <div className="App">
          <header>
            <div className='nav-icon' onClick={this.toggle} id="toggleNavButton"></div>
            <nav>
              <div className='logo'>
                <img alt='logo' src={logo}/>
              </div>
              <ul className='nav-ul'>
                <li><NavLink to='/home' onClick={this.removeActiveNav}><img className='nav-li' alt='home' src={homeNav}/></NavLink></li>
                <li><NavLink to='/projects' onClick={this.removeActiveNav}><img className='nav-li' alt='projects' src={projectsNav}/></NavLink></li>
                <li><NavLink to='/contact' onClick={this.removeActiveNav}><img className='nav-li' alt='contact' src={contactNav}/></NavLink></li>
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

          <div className='footer-absolute-positioning-replacement'>
          </div>
          <footer>
            <Footer />
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
