
import ShootingStars from './ShootingStars.js';
import logoLinkedin from '../img/linkedin-logo.png';
import logoGithub from '../img/github-logo.png';
import logoMail from '../img/mail-logo.png';
import logoInstagram from '../img/instagram-logo.png';

const Hero = () => {

    /* ------------------ stars------------ */

    const isDesctop = window.matchMedia(`(min-width:800px)`).matches;

    let amount, starSize; 
    isDesctop ? (amount = 300) : (amount = 100);
    isDesctop ? (starSize = 50) : (starSize = 30);

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

    createStarrySky(amount, starSize);
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
                    
                    <div className='hero__heading'>
                        <h1 className='hero__h1'><span>Hi, I'm Hana</span>{isDesctop ? ' | ' : ', '}<span className='hero__h1--position'>Frontend Developer</span></h1>
                        <div className='hero__socials'>
                            <div><a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US" rel="noreferrer" target='_blank'><img className='socials-img' alt='logo of linkedin' src={logoLinkedin}/></a></div>
                            <div><a href="https://github.com/havoriskova" rel="noreferrer" target='_blank'><img className='socials-img' alt='logo of github' src={logoGithub}/></a></div>
                            <div><a href="mailto:ha.voriskova@gmail.com"><img className='socials-img' alt='icon of mail' src={logoMail}/></a></div>
                            <div><a href="https://www.instagram.com/hana_voriskova/" rel="noreferrer" target='_blank'><img className='socials-img' alt='logo of instagram' src={logoInstagram}/></a></div>
                        </div>
                        <div className='hero__p'>I like creating responsive websites. I'm a lifelong learner and I might be addicted to baking desserts.</div>
                    </div>
                      
            </div>
           
        </div>
            
    )
};

export default Hero;