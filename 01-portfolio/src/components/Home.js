import'./Home.css';
//import RandomBackground from '../hoc/RandomBackground';
import Hero from './Hero.js';
import About from './About.js';


const Home = (props) => {

    console.log(props);


    return (
        <div className="Home container">
            <div className='black-bkg'><Hero /></div>

            <About />
        </div>
    )
}

export default Home;