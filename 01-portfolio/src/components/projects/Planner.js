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

                <div className='project_photo_phone_width'>
                    <p>budouci fotka pro telefony</p>{/* <img alt='printscreen of page' src={}/> tady bude fotka optimalizovana pro telefon */}
                </div>

                <p>Monthly planner PDF generator that allows you to download a planner in your desired style. You can choose the color, font, language and space for notes.
                It is possible to generate planner for the whole year or for just one month. Webpage is fully responsive. I was using 2 npm packages - html2canvas to save screenshots of planner into images and jsPDF for generating (multi-page) pdf from the images.</p>

                <a className='projectsLink' href='https://voriskova-planner.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                <a className='projectsLink' href='https://github.com/havoriskova/monthly-planner' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
            </div>
            <div className="col-2">
                {/*img printscreenu pro scroll */}
               <p>budouci fotka pro desktop</p> {/* img optimalizovane pro pc */}
            </div>
            <div className="projects-hr"></div>
        </div>
    )
};

export default Planner;


// ze je to ve vanilla JS, a funguje to pro PC. V soucasne dobe mam rozpracovany i React Planner