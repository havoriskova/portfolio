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

// function createShootingStars() {

//     let shootingStars = [];
//     let intervalCounter = 0;

//     const id = setInterval(createStars, 5000); // 5000 interval musí být dlouhý max-delay(3000) + délka animace(2000)

//     function createStars() {
        
//         intervalCounter++;
//         console.log(intervalCounter);

//         if (intervalCounter == 10) {
//             clearInterval(id);
//             console.log("funguje if u counteru");
//         } 


//         let randomAmount = Math.floor(Math.random()*3) + 2;

//         if (shootingStars.length > 0) {
//             console.log("funguje");
        
//             while (shootCont.firstChild) {shootCont.firstChild.remove();}

//             shootingStars.length = 0;

//             //clearInterval();
//         }

//         for (let i = 0; i < randomAmount; i++) {

//             let shootingStar = document.createElement("div");
//             shootingStar.classList.add("sky_hero_container_shooting-star");
//             shootingStar.style.setProperty( "--osa-y", `${Math.floor(Math.random()*120) + 1}px`);
//             shootingStar.style.setProperty("--animation-delay", `${Math.floor(Math.random()*30)*0.1}s`);
//             shootingStars.push(shootingStar);
//         }

    
//     }
// }

// createShootingStars();


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
                        

                    {/* {shootingStar.map(shootingStar => {
                        console.log(shootingStar);
                        return(
                            <div className='sky_hero_shooting-star' key={shootingStar.id}></div>
                        )
                    })} */}
                    
                      
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