import headerICF from '../../img/headers/ICF_WEBSITE_5_rem.png';
import githubLogo from '../../img/github-logo.png';
import icfForPhones from '../../img/icf-for-phones.JPG';
import icfForDesktop from '../../img/photos-for-scrolling/icf.JPG';
import {useState} from 'react';

const Icf = ({url}) => {

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
                    <img alt='header for ICF' src={headerICF}/>
                </h2>

                <h3>Next.js website + contentful</h3>

                <div className='project_photo_phone_width'>
                    <img alt='desktop and phone with open website' src={icfForPhones}/>
                </div>

                <p>I was working as web developer in an interdisciplinary group of students in order to create website for International Conservation Fund. 
                    Wireframes were made by students of web design in Figma. 
                    This website is made in Next.js, and it's connected to headless CMS Contentful.
                    For donating were used widgets from Donorbox and the Giving Block (crypto donating).</p>

                <div className='buttons_container'>
                    <a className='primary-action-button' href='https://icf-website-havoriskova.vercel.app/' target='_blank' rel='noreferrer'>Visit website</a>
                    <a className='secondary-action-button github-link' href='https://github.com/havoriskova/icf-website' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
                </div>
            
            </div>
            <div className="col-2">
                <div className='desktop-pictures-container'>
                    <img alt='desktop and phone with open website' src={icfForDesktop}  loading="lazy" onClick={showPicture}/>
                </div>
            </div>
            <div className="projects-hr"></div>
        </div>
    )
};

export default Icf;