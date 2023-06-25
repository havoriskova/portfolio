import heroRobots from '../img/robots_hero.png';
// import webHeader from '../img/headers/web_6_rem.png';
// import developmentHeader from '../img/headers/development_14_rem.png';
// import portfolioHeader from '../img/headers/portfolio_12_rem.png';
import webdevelopmentportfolio from '../img/headers/WEB_DEVELOPMENT_PORTFOLIO.png';
import ShootingStars from './ShootingStars.js';

const Hero = () => {

    /* ------------------ stars------------ */

    const isDesctop = window.matchMedia(`(min-width:800px)`).matches;

    let amount, starSize; 
    isDesctop ? (amount = 200) : (amount = 50);
    isDesctop ? (starSize = 70) : (starSize = 30);

    const stars = []; // array s objekty

    function createStarrySky(amountOfStars, starSize) {

        for (let i = 0; i <= amountOfStars; i++) {
            let star ={};
            star.id = i;
            star.width= `${(Math.floor(Math.random()*starSize))*0.1}px`;
            // star.height=`${(Math.floor(Math.random()*30))*0.1}px`;
            star.top= `${Math.floor(Math.random()*85)+1}%`;
            star.left = `${Math.floor(Math.random()*98)+1}%`;
            star.animationDelay= `${Math.floor(Math.random()*3)+1}s`;
            stars.push(star);
        }

    }

    createStarrySky(amount, starSize); // pro telefony bude jen staticky obrazek oblohy pres stejny <div> s bkg v media queries
    // console.log(stars);


 

    return(
        <div className='hero-section'>
            <div className='sky_hero_container'>
                        
                    {stars.map(star => { 
                        // console.log(star);
                        return(
                        <div className='sky_hero_star' key={star.id} style={{width: star.width,
                        top: star.top, left: star.left, animationDelay: star.animationDelay}}></div>)
                        })}
                        
                    
                    <div className='sky_hero_shooting_star_container'>

                        <ShootingStars />

                    </div>
                    
                      
            </div>
            {/* <div className='header-container'>
                <div className='development constellation_header_14'>
                    <img alt='development' src={developmentHeader}/>
                </div>
                <div className='web constellation_header_6'>
                    <img alt='web' src={webHeader}/>
                </div>
                <div className='portfolio constellation_header_12'>
                    <img alt='portfolio' src={portfolioHeader}/>
                </div>
            </div> */}
            <div className='header-container-phones'>
                <img alt='web development portfolio' src={webdevelopmentportfolio}/>
            </div>
            <div className='robots_hero_container'>
                <img alt='' src={heroRobots} />
            </div>
        </div>
            
    )
};

export default Hero;