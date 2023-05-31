import'./Home.css';
//import RandomBackground from '../hoc/RandomBackground';
import heroRobots from '../img/robots_hero.png';
import aboutHeader from '../img/headers/about_6_rem.png';


const Home = (props) => {

    console.log("no")
    console.log(props);

    return (
        <div className="Home container">
            <div className='extension-of-header full-width'>
                <div className='robots_hero_container'>
                    <img alt='' src={heroRobots} />
                </div>
            </div>
            <div>Home !!!!</div>
            <div>
                <h2 className='constellation_header_6'>
                        <img alt='header for abouy' src={aboutHeader}/>
                </h2>
            </div>
        </div>
    )
}

export default Home;