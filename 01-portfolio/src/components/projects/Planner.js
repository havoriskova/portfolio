import headerPlanner from '../../img/headers/PLANNER_GENERATOR_7_rem.png'
import githubLogo from '../../img/github-logo.png';

const Planner = (props) => {

    return(
        <div className="project container">
            <div className="col-1">
                <h2 className='constellation_header_7'>
                        <img alt='header for planner generator' src={headerPlanner}/>
                </h2> {/* link => img souhvezdi */}
                <h3>Vanilla JavaScript Webpage</h3> {/* mensi font, ale UPPERCASE */}

                <p>My goal was to create a generator of monthly planner in your desired style. 
                You can choose between one month or year option.</p>

                <a className='projectsLink' href='https://voriskova-planner.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                <a className='projectsLink' href='https://github.com/havoriskova/monthly-planner' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
            </div>
            <div className="col-2">
                {/*img printscreenu pro scroll */}
               <p>budouci fotka</p> {/* img fotky upravene pres inkscape s vyrizlym monitorem jako 2., protoze musi mit vyssi z-index  */}
            </div>
            <div className="projects-hr"></div>
        </div>
    )
};

export default Planner;


// ze je to ve vanilla JS, a funguje to pro PC. V soucasne dobe mam rozpracovany i React Planner