import headerWeather from '../../img/headers/WEATHER_APP_5_rem.png';
import githubLogo from '../../img/github-logo.png';
import phonePhotoWeather from '../../img/screenshots/weather-phone.png';

const Weather = (props) => {


    return(
        <div className="project container">
            <div className="col-1">
                <h2 className='constellation_header_5'>
                    <img alt='header for weather' src={headerWeather}/>
                </h2> {/* link => img souhvezdi */}

                <h3>React Webpage</h3> {/* mensi font, ale UPPERCASE */}

                <div className='project_photo_phone_width'>
                    <img alt='weather app' src={phonePhotoWeather} loading="lazy"/>{/* <img alt='printscreen of page' src={}/> tady bude fotka optimalizovana pro telefon */}
                </div>

                <p>React weather app which uses API from openweathermap to get data in JSON as current temperature, time of sunset, humidity and forecast for upcoming hours. Styling is made with Bootstrap. Moving icons are from npm package react-animated-weather.</p>

                <a className='projectsLink' href='https://voriskova-weather-app.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                <a className='projectsLink' href='https://github.com/havoriskova/React-Weather-App' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>

            </div>
            <div className="col-2">
                {/*img printscreenu pro scroll */}
                <div className='desktop-pictures-container'>
                    <img alt='weather app' src={phonePhotoWeather} loading="lazy"/> {/* img optimalizovane pro pc */}
                </div>
            </div>

            <div className="projects-hr"></div>
        </div>
    )
};

export default Weather;


// zalezi, co vyberes, ale klidne bych nechala Bootstrap, at jeden projekt s Bootstrapem v porfoliu mam !!