import headerDictionary from '../../img/headers/DICTIONARY_5_rem.png';
import githubLogo from '../../img/github-logo.png';
import dictionaryForPhones from '../../img/dictionary-for-phones.jpg';
import dictionaryForDesktop from '../../img/photos-for-scrolling/dictionary.jpg';

const Dictionary = (props) => {


    return(
        <div className="project container">
        
            <div className="col-1">
                    <h2 className='constellation_header_5'>
                        <img alt='header for dictionary' src={headerDictionary}/>
                    </h2> {/* link => img souhvezdi */}
                    
                    <h3>React Webpage</h3> {/* mensi font, ale UPPERCASE */}

                    <div className='project_photo_phone_width'>
                    <img alt='desktop and phone with open website page' src={dictionaryForPhones}/>
                    </div>

                    <p>On this fully responsive webpage I am using 2 API calls. One is for getting json data from freeDictionaryAPI. 
                        The second API is for getting url of pictures that are rendered in the gallery and 
                        its API key is secured due to serverless function.
                        Digital collage pictures are made in a vector graphic software Inkscape.</p>

                    <a className='projectsLink' href='https://voriskova-dictionary.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                    <a className='projectsLink' href='https://github.com/havoriskova/dictionary' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
            </div>
            <div className="col-2">
                    {/*img printscreenu PC pro scroll */}
                    {/*img printscreenu PHONE pro scroll */}
                    <div className='desktop-pictures-container'>
                        <img alt='desktop and phone with open website' src={dictionaryForDesktop}  loading="lazy"/>
                    </div>
                    {/* img fotky upravene pres inkscape s vyrizlym monitorem jako 2., protoze musi mit vyssi z-index  */}
            </div>
            <div className="projects-hr"></div>
        </div>
    )
};

export default Dictionary;

