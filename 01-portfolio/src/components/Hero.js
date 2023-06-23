import heroRobots from '../img/robots_hero.png';
// import webHeader from '../img/headers/web_6_rem.png';
// import developmentHeader from '../img/headers/development_14_rem.png';
// import portfolioHeader from '../img/headers/portfolio_12_rem.png';
import webdevelopmentportfolio from '../img/headers/WEB_DEVELOPMENT_PORTFOLIO.png';
import { useState } from 'react';

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


 /* ------------------ shooting stars------------ */
    const [areShootingStars, setShootingStars] = useState(false);

    let shootingStars = [];
    let counter = 0;

    const id = setInterval(createStars, 6000); // 6000 interval musí být dlouhý max-delay(3000) + délka animace(3000)

    function createStars() {

        let amountShooting, heightForShooting, widthForShooting; 
        isDesctop ? (amountShooting = 7) : (amountShooting = 3);
        isDesctop ? (heightForShooting = 700) : (heightForShooting = 300);
        isDesctop ? (widthForShooting = 2000) : (widthForShooting = 700);

       counter++;
       console.log(counter);

        if (counter === 10) {
            clearInterval(id);
            console.log("funguje if u counteru");
            shootingStars.length = 0;
            setShootingStars(false);
        } 

       let randomAmount = Math.floor(Math.random()*amountShooting) + 2;


        for (let i = 0; i < randomAmount; i++) {
            let shootingStar = {};
            setShootingStars(true);
            shootingStar.id = i;
            shootingStar.top = `${Math.floor(Math.random()*heightForShooting) + 1}px`;
            shootingStar.right = `${Math.floor(Math.random()*widthForShooting) + 1}px`;
            shootingStar.animationDelay = `${Math.floor(Math.random()*30)*0.1}s`;
            shootingStars.push(shootingStar);
        }

    
    }


    //createStars(); // musi byt vyvolana intervalem


/*--------------------------------------- */

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
                        {areShootingStars ? (shootingStars.map(shootingStar => {
                                console.log(shootingStar);
                                return(
                                    <div className='sky_hero_shooting-star' key={shootingStar.id}
                                    style={{animationDelay: shootingStar.animationDelay, '--osa-y': shootingStar.top,
                                    '--osa-x': shootingStar.right}}></div>
                                )
                        })): (null)}
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