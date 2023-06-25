import { useEffect, useState } from 'react';

export default function ShootingStars () {


const isDesctop = window.matchMedia(`(min-width:800px)`).matches;

let shootingStarsArr = [];
const [shootingStarsDiv, setShootingStarsDiv] = useState();
const [counter, setCounter] = useState(0);



const createStars = () => {

    let amountShooting, delay, duration; // amount is for 1 cyclus, height in %
    isDesctop ? (amountShooting = 10) : (amountShooting = 3);
    isDesctop ? (delay = 20) : (delay = 30);
    isDesctop ? (duration = 4) : (duration = 3);
    // isDesctop ? (heightForShooting = 50) : (heightForShooting = 70);

    setCounter(counter + 1);


   let randomAmount = Math.floor(Math.random()*amountShooting) + 2; //minimum by mely byt dve
   console.log(randomAmount);

    for (let i = 0; i < randomAmount; i++) {
        let shootingStar = {};
        shootingStar.id = i;
        shootingStar.top = `${Math.floor(Math.random()*90) + 10}%`; /*zacit uplne nahore nemusi */
        shootingStar.animationDelay = `${Math.floor(Math.random()*delay)*0.1}s`;
        shootingStarsArr.push(shootingStar);
        shootingStar.animationDuration = `${duration}s`;
        if (counter % 2 === 0) {
            shootingStar.class= 'sky_hero_shooting-star';
        } else {
            shootingStar.class= 'sky_hero_shooting-star-2';
        }
        
    }

    const shootingsStars = shootingStarsArr.map(shootingStar => {
        console.log(shootingStar);
        return(
            <div className={shootingStar.class} key={shootingStar.id}
            style={{animationDelay: shootingStar.animationDelay, top: shootingStar.top, animationDuration: shootingStar.animationDuration
            }}></div>
        )});

    setShootingStarsDiv(shootingsStars);


}

// init call - rada bych, ale chce to po mne dat fci createStars do useCallback hooku, a ten pak chce dat states do useMemo hooku :(
//useEffect(() => {createStars()}, [createStars]); //init call, mel by se renderovat jen jednou, a pak uz ne, proto je prazdna dependency array, ale takhle mi to netlify nenacte :(  

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