import { useEffect, useState } from 'react';

export default function ShootingStars () {


/* ------------------ shooting stars------------ */
const isDesctop = window.matchMedia(`(min-width:800px)`).matches;

let shootingStars = [];
const [shootingStarsDiv, setShootingStarsDiv] = useState();

const createStars = () => {

    let amountShooting, heightForShooting; // amount is for 1 cyclus, height in %
    isDesctop ? (amountShooting = 5) : (amountShooting = 3);
    isDesctop ? (heightForShooting = 90) : (heightForShooting = 70);


   let randomAmount = Math.floor(Math.random()*amountShooting) + 2; //minimum by mely byt dve


    for (let i = 0; i < randomAmount; i++) {
        let shootingStar = {};
        shootingStar.id = i;
        shootingStar.top = `${Math.floor(Math.random()*heightForShooting) + 1}%`;
        shootingStar.animationDelay = `${Math.floor(Math.random()*30)*0.1}s`;
        shootingStars.push(shootingStar);
    }

    const shootingsStars = shootingStars.map(shootingStar => {
        console.log(shootingStar);
        return(
            <div className='sky_hero_shooting-star' key={shootingStar.id}
            style={{animationDelay: shootingStar.animationDelay, top: shootingStar.top,
            }}></div>
        )});

    setShootingStarsDiv(shootingsStars);


}


useEffect(() => {
    const interval = setInterval(() => {
      createStars();
      console.log('This will run every 6 seconds!');
    }, 6000);
    return () => clearInterval(interval);
  });


//createStars(); // musi byt vyvolana intervalem
//interval musí být dlouhý max-delay(3000) + délka animace(3000)


/*--------------------------------------- */

return (
    <>
    {shootingStarsDiv}
    </>
)


}