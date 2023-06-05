import headerDictionary from '../../img/headers/DICTIONARY_5_rem.png';
import githubLogo from '../../img/github-logo.png';

const Dictionary = (props) => {


    return(
        <div className="project container">
        
            <div className="col-1">
                    <h2 className='constellation_header_5'>
                        <img alt='header for dictionary' src={headerDictionary}/>
                    </h2> {/* link => img souhvezdi */}
                    
                    <h3>React Webpage</h3> {/* mensi font, ale UPPERCASE */}

                    <p>On this webpage I am using 2 API calls. It is fully responsive.</p>

                    <a className='projectsLink' href='https://voriskova-planner.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                    <a className='projectsLink' href='https://github.com/havoriskova/monthly-planner' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
            </div>
            <div className="col-2">
                    {/*img printscreenu PC pro scroll */}
                    {/*img printscreenu PHONE pro scroll */}
                    {/* img fotky upravene pres inkscape s vyrizlym monitorem jako 2., protoze musi mit vyssi z-index  */}
            </div>

        </div>
    )
};

export default Dictionary;

