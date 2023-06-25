import { useEffect, useState } from 'react';

export default function ShootingStars () {


const isDesctop = window.matchMedia(`(min-width:800px)`).matches;

let shootingStarsArr = [];
const [shootingStarsDiv, setShootingStarsDiv] = useState();
const [counter, setCounter] = useState(0);



const createStars = () => {

    let amountShooting, delay, duration, left; // amount is for 1 cyclus, height in %
    isDesctop ? (amountShooting = 2) : (amountShooting = 2);
    isDesctop ? (delay = 3) : (delay = 10); // v ms
    isDesctop ? (duration = 1.7) : (duration = 1); // v s
    isDesctop ? (left = -10) : (left= -50); // v %
    // isDesctop ? (heightForShooting = 50) : (heightForShooting = 70);

    setCounter(counter + 1);


   let randomAmount = Math.floor(Math.random()*amountShooting) + 1; //minimum jedna
   //console.log(randomAmount);

    for (let i = 0; i < randomAmount; i++) {
        let shootingStar = {};
        shootingStar.id = i;
        shootingStar.left = `${left}%`;
        shootingStar.top = `${Math.floor(Math.random()*70) + 10}%`; /*zacit uplne nahore a taky moc dole nemusi */
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
        //console.log(shootingStar);
        return(
            <div className={shootingStar.class} key={shootingStar.id}
            style={{animationDelay: shootingStar.animationDelay, top: shootingStar.top, animationDuration: shootingStar.animationDuration, '--left': shootingStar.left
            }}></div>
        )});

    setShootingStarsDiv(shootingsStars);


}

// init call - rada bych, ale chce to po mne dat fci createStars do useCallback hooku, a ten pak chce dat states do useMemo hooku :(
//useEffect(() => {createStars()}, [createStars]); //init call, mel by se renderovat jen jednou, a pak uz ne, proto je prazdna dependency array, ale takhle mi to netlify nenacte :(  

useEffect(() => {
    const interval = setInterval(() => {
      createStars();
     // console.log('This will run every 2 seconds!');
    }, 2000);
    return () => clearInterval(interval);
  });


// useEffect(() => {
//     createStars();
// })


//createStars(); // musi byt vyvolana intervalem
//interval musí být dlouhý max-delay(3000) + délka animace(3000)


/*--------------------------------------- */

return (
    <>
    {shootingStarsDiv}
    </>
)


}