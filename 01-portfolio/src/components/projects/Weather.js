import headerWeather from '../../img/headers/WEATHER_APP_5_rem.png';
import githubLogo from '../../img/github-logo.png';
import phonePhotoWeather from '../../img/weather-for-phones.jpg';
import weatherForDesktop from '../../img/photos-for-scrolling/weather.jpg';
import weatherForDesktopTwo from '../../img/photos-for-scrolling/weatherTwoGallery.JPG';
import {useState} from 'react';

const Weather = ({url}) => {

    const [isPictureClicked, setGallery] = useState(false);
    const [src, setSrc] = useState('');

    const showPicture = (e) => {
      //  console.dir(e.target.attributes);
       // console.log(e.target.attributes.src.nodeValue); // --> /static/media/planner.1c242bf63d54130bfbfc.JPG
        const urlImg = url; // local or hanavoriskova.cz domain
        const srcImg = e.target.attributes.src.nodeValue;
        setSrc(`${urlImg}${srcImg}`);
        setGallery(true);
        document.querySelector('header').style.position = 'absolute';
    };

    const shutGallery = () => {
        setGallery(false);
        document.querySelector('header').style.position = 'fixed';
    }

    return(
        <div className="project container">
            { isPictureClicked ? (
                <div className='galleryContainer' onClick={shutGallery}>
                    <img src={src} alt='project' className='galleryImg'></img>
                </div>
            ) : (null) }
            <div className="col-1">
                <h2 className='constellation_header_5'>
                    <img alt='header for weather' src={headerWeather}/>
                </h2>

                <h3>React Webpage</h3>

                <div className='project_photo_phone_width'>
                    <img alt='weather app' src={phonePhotoWeather} loading="lazy"/>
                </div>

                <div  className='text-container'>
                    <p>React weather app which uses API from openweathermap to get data in JSON as current temperature, 
                    time of sunset, humidity and forecast for upcoming hours. Styling is made with Bootstrap. 
                    Moving icons are from npm package react-animated-weather. 
                    I built this app during the React course from <a href='https://www.shecodes.io/workshops' target='_blank' rel='noreferrer'>SheCodes</a>.</p>
                </div>
                

                <div className='buttons_container'>
                    <a className='primary-action-button' href='https://voriskova-weather-app.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                    <a className='secondary-action-button github-link' href='https://github.com/havoriskova/React-Weather-App' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
                </div>

            </div>
            <div className="col-2">
                <div className='desktop-pictures-container'>
                    <div className='frame'></div>
                    <img alt='weather app' src={weatherForDesktop} loading="lazy" onClick={showPicture}/>
                    <img alt='weather app' src={weatherForDesktopTwo} loading="lazy" onClick={showPicture}/>
                    <div className='gallery-controls'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="projects-hr"></div>
        </div>
    )
};

export default Weather;
