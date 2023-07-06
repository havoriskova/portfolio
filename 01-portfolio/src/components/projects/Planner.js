import headerPlanner from '../../img/headers/PLANNER_GENERATOR_7_rem.png'
import githubLogo from '../../img/github-logo.png';
import plannerForPhones from '../../img/planner-for-phones.JPG';
import plannerForDesktop from '../../img/photos-for-scrolling/planner.JPG';
import {useState} from 'react';

const Planner = ({url}) => {

    const [isPictureClicked, setGallery] = useState(false);
    const [src, setSrc] = useState('');

    const showPicture = (e) => {
      //  console.dir(e.target.attributes);
       // console.log(e.target.attributes.src.nodeValue); // > /static/media/planner.1c242bf63d54130bfbfc.JPG
        const urlImg = url;
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
                <h2 className='constellation_header_7'>
                        <img alt='header for planner generator' src={headerPlanner}/>
                </h2>
                <h3>Vanilla JavaScript Webpage</h3>

                <div className='project_photo_phone_width'>
                    {/*img for phones */}
                    <img alt='desktop and phone with open website page' src={plannerForPhones}/>
                </div>


                <div  className='text-container'>
                    <p>Monthly planner PDF generator that allows you to download a planner in your desired style. 
                        You can choose the color, font, language and space for notes.
                    It is possible to generate planner for the whole year or for just one month. Webpage is fully responsive. 
                    I was using 2 npm packages - html2canvas to save screenshots of planner into images and jsPDF for generating (multi-page) pdf from the images.
                    </p>
                </div>
                

                <div className='buttons_container'>
                    <a className='primary-action-button' href='https://voriskova-planner.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                    <a className='secondary-action-button github-link' href='https://github.com/havoriskova/monthly-planner' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
                </div>
            </div>
            <div className="col-2">
                <div className='desktop-pictures-container'>
                    <img className='cutted-photo' alt='desktop and phone with open page'
                        src={plannerForDesktop}  onClick={showPicture}/>
                </div>

            </div>
            <div className="projects-hr"></div>
        </div>
    )
};

export default Planner;