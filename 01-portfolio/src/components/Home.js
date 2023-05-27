import'./Home.css';
//import RandomBackground from '../hoc/RandomBackground';
import heroRobots from '../img/robots_hero.png';


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
        </div>
    )
}

export default Home;