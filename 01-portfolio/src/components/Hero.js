import heroRobots from '../img/robots_hero.png';
// import webHeader from '../img/headers/web_6_rem.png';
// import developmentHeader from '../img/headers/development_14_rem.png';
// import portfolioHeader from '../img/headers/portfolio_12_rem.png';
import webdevelopmentportfolio from '../img/headers/WEB_DEVELOPMENT_PORTFOLIO.png';

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

    let shootingStars = [];

    //const id = setInterval(createStars, 5000); // 5000 interval musí být dlouhý max-delay(3000) + délka animace(2000)

    function createStars(amount, height, width) {
        

       // let randomAmount = Math.floor(Math.random()*3) + 2;


        for (let i = 0; i < amount; i++) {
            let shootingStar = {};
            shootingStar.id = i;
            shootingStar.top = `${Math.floor(Math.random()*height) + 1}px`;
            shootingStar.right = `${Math.floor(Math.random()*width) + 1}px`;
            shootingStar.animationDelay = `${Math.floor(Math.random()*30)*0.1}s`;
            shootingStars.push(shootingStar);
        }

    
    }

    let amountShooting, heightForShooting, widthForShooting; 
    isDesctop ? (amountShooting = 10) : (amountShooting = 5);
    isDesctop ? (heightForShooting = 700) : (heightForShooting = 300);
    isDesctop ? (widthForShooting = 2000) : (widthForShooting = 700);

    createStars(amountShooting, heightForShooting, widthForShooting);


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
                        {shootingStars.map(shootingStar => {
                                console.log(shootingStar);
                                return(
                                    <div className='sky_hero_shooting-star' key={shootingStar.id}
                                    style={{animationDelay: shootingStar.animationDelay, '--osa-y': shootingStar.top,
                                    '--osa-x': shootingStar.right}}></div>
                                )
                        })}
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