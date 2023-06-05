import headerWeather from '../../img/headers/WEATHER_APP_5_rem.png'

const Weather = (props) => {


    return(
        <div className="project container">
            <h2 className='constellation_header_5'>
                <img alt='header for weather' src={headerWeather}/>
            </h2> {/* link => img souhvezdi */}
        </div>
    )
};

export default Weather;


// zalezi, co vyberes, ale klidne bych nechala Bootstrap, at jeden projekt s Bootstrapem v porfoliu mam !!