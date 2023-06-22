import headerPlanner from '../../img/headers/PLANNER_GENERATOR_7_rem.png'
import githubLogo from '../../img/github-logo.png';
import plannerForPhones from '../../img/planner-for-phones.JPG';

const Planner = (props) => {

    return(
        <div className="project container">
            <div className="col-1">
                <h2 className='constellation_header_7'>
                        <img alt='header for planner generator' src={headerPlanner}/>
                </h2> {/* link => img souhvezdi */}
                <h3>Vanilla JavaScript Webpage</h3> {/* mensi font, ale UPPERCASE */}

                <div className='project_photo_phone_width'>
                    <img alt='desktop and phone with open website page' src={plannerForPhones}/>
                </div>

                <p>Monthly planner PDF generator that allows you to download a planner in your desired style. You can choose the color, font, language and space for notes.
                It is possible to generate planner for the whole year or for just one month. Webpage is fully responsive. I was using 2 npm packages - html2canvas to save screenshots of planner into images and jsPDF for generating (multi-page) pdf from the images.</p>

                <a className='projectsLink' href='https://voriskova-planner.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                <a className='projectsLink' href='https://github.com/havoriskova/monthly-planner' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
            </div>
            <div className="col-2">
                {/* img pro pc */}
                <div className='desktop-pictures-container'> {/*position relative, overflow hidden */}
                    <img className='printscreen-desktop' alt='printscreen of the project in desktop width' 
                        srcset=""/> {/* absolute positioning v %, protoze se bude menit velikost obou img */}
                    <img className='printscreen-phone' alt='printscreen of the project in phone width' 
                        srcset=""/>
                    <img className='cutted-photo' alt='desktop and phone with cutted monitors, so the printscreens of page seems to be in there'
                        srcset=""/> {/*max-width:100% */}

                    {/* Scroll me text: Absolute positioning in %, MUSI BYT SAMOSTATNE - nemuze byt soucasti img, protoze pak by se to pismo furt zvetsovalo, a to nechces */}
                    {/* <div className='scrollMe-planner-phone'>scroll me!</div>*/}
                    {/* <div className='scrollMe-planner-desktop'>scroll me!</div> = absolute positioning in % */}
                </div>

            </div>
            <div className="projects-hr"></div>
        </div>
    )
};

export default Planner;


// ze je to ve vanilla JS, a funguje to pro PC. V soucasne dobe mam rozpracovany i React Planner