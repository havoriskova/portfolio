import'./Home.css';
//import RandomBackground from '../hoc/RandomBackground';
import heroRobots from '../img/robots_hero.png';
import aboutHeader from '../img/headers/about_6_rem.png';
import aboutImage from '../img/about.jpeg';
// import webHeader from '../img/headers/web_6_rem.png';
// import developmentHeader from '../img/headers/development_14_rem.png';
// import portfolioHeader from '../img/headers/portfolio_12_rem.png';


const Home = (props) => {

    console.log("no")
    console.log(props);

    /* ------------------shooting stars------------ */


    // stars

// function createStarrySky() {
//     const stars = [];

//     for (let i = 0; i <= 100; i++) {
//         const star;
//         star.style.width= `${(Math.floor(Math.random()*15))*0.1}px`;
//         star.style.height=`${(Math.floor(Math.random()*15))*0.1}px`;
//         star.style.top= `${Math.floor(Math.random()*98)+1}%`;
//         star.style.left = `${Math.floor(Math.random()*98)+1}%`;
//         star.style.animationDelay= `${Math.floor(Math.random()*3)+1}s`;
//         stars.push(star);
//     }

// }

// createStarrySky();

//shooting-stars - osaY a delay

// function createShootingStars() {

//     const shootCont = document.querySelector(".sky_hero_container_shooting-con");
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
//             shootingStar.classList.add("sky_hero_container_shooting-animation");
//             shootingStars.push(shootingStar);
//         }

//         shootingStars.forEach(shoot => shootCont.appendChild(shoot)); 
    
//     }

    // zkouška na setProperty u --my-variable
    //document.getElementById("container").style.setProperty("--zkouska", "blue"); 
// }

// createShootingStars();


/*--------------------------------------- */

    return (
        <div className="Home container">
            <div className='extension-of-header full-width'>
                <div className='robots_hero_container'>
                    <img alt='' src={heroRobots} />
                </div>
                <div className='sky_hero_container'>
                        <div className="sky_hero_container_half_circle">
                            <div className="sky_hero_container_stars">
                                {/* {stars.map(star => {<div className='sky_hero_container_star' key={star.id}>{star}</div>})} */}
                            </div>
                            <div className="sky_hero_container_shooting-con">
                            </div>
                        </div>
                </div>
                {/* <div className='header-container'>
                    <div className='development constellation_header_14'><img alt='development' src={developmentHeader}/></div>
                    <div className='web constellation_header_6'><img alt='web' src={webHeader}/></div>
                    <div className='portfolio constellation_header_12'><img alt='portfolio' src={portfolioHeader}/></div>
                </div> */}
            </div>
            <div>Home !!!!</div>
            <div>
                <h2 className='constellation_header_6'>
                         <img alt='header for about' src={aboutHeader}/>
                </h2>
                <p></p>
                <img className='LennonWallImg' alt='me with font jokes on Lennon wall' src={aboutImage}/>
            </div>
        </div>
    )
}

export default Home;