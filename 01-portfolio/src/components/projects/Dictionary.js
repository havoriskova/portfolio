import headerDictionary from '../../img/headers/DICTIONARY_5_rem.png';
import githubLogo from '../../img/github-logo.png';
import dictionaryForPhones from '../../img/dictionary-for-phones.jpg';
import dictionaryForDesktop from '../../img/photos-for-scrolling/dictionary.jpg';
import {useState} from 'react';

const Dictionary = ({url}) => {

    const [isPictureClicked, setGallery] = useState(false);
    const [src, setSrc] = useState('');

    const showPicture = (e) => {
      //  console.dir(e.target.attributes);
       // console.log(e.target.attributes.src.nodeValue); // mi da tohle: /static/media/planner.1c242bf63d54130bfbfc.JPG, coz je adresa z hanavoriskova.netlify.app/static...
        const urlImg = url;
        const srcImg = e.target.attributes.src.nodeValue;
        setSrc(`${urlImg}${srcImg}`);
        setGallery(true);
    };

    const shutGallery = () => {
        setGallery(false);
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
                        <img alt='header for dictionary' src={headerDictionary}/>
                    </h2> 
                    
                    <h3>React Webpage</h3>

                    <div className='project_photo_phone_width'>
                    <img alt='desktop and phone with open website page' src={dictionaryForPhones}/>
                    </div>

                    <p>On this fully responsive webpage I am using 2 API calls. One is for getting json data from freeDictionaryAPI. 
                        The second API is for getting url of pictures that are rendered in the gallery and 
                        its API key is secured due to serverless function.
                        Digital collage pictures are made in a vector graphic software Inkscape.</p>

                    <a className='primary-action-button' href='https://voriskova-dictionary.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                    <a className='secondary-action-button github-link' href='https://github.com/havoriskova/dictionary' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
            </div>
            <div className="col-2">
                    
                    <div className='desktop-pictures-container'>
                        <img alt='desktop and phone with open website' src={dictionaryForDesktop}  onClick={showPicture} loading="lazy"/>
                    </div>
            </div>
            <div className="projects-hr"></div>
        </div>
    )
};

export default Dictionary;

