import'./Home.css';
//import RandomBackground from '../hoc/RandomBackground';
import Hero from './Hero.js';
import About from './About.js';
import { useEffect } from 'react';


const Home = () => {

    
    useEffect(() => {
        window.scrollTo(0,0);
    })

    //console.log(props);


    return (
        <div className="Home container">
            <div className='hero-bkg'><Hero /></div>

            <About />
        </div>
    )
}

export default Home;