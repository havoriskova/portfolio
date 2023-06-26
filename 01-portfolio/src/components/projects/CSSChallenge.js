import cssHeader from '../../img/headers/CSS_CHALLENGES_5_rem.png'
import githubLogo from '../../img/github-logo.png';
import challengesForPhones from '../../img/challenges-for-phones.jpg';
import challengesForDesktop from '../../img/photos-for-scrolling/challenges.jpg';
import {useState} from 'react';

const CSSChallenge = ({url}) => {


    const [isPictureClicked, setGallery] = useState(false);
    const [src, setSrc] = useState('');

    const showPicture = (e) => {
      //  console.dir(e.target.attributes);
       // console.log(e.target.attributes.src.nodeValue); // > /static/media/planner.1c242bf63d54130bfbfc.JPG
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
                    <img alt='header for CSS challenge' src={cssHeader}/>
                </h2>

                <h3>React Webpage</h3> 

                <div className='project_photo_phone_width'>
                    <img alt='' src={challengesForPhones}/>
                </div>

                <p>After starting the 100dayscss challenge in vanilla JS, I decided to redesign some of the challenges in React. That's why I created this responsive website to help me track my progress.</p>

                    <a className='primary-action-button' href='https://voriskova-css-challenge.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                    <a className='secondary-action-button github-link' href='https://github.com/havoriskova/react-and-css-challenges' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
            </div>
            <div className="col-2">
                <div className='desktop-pictures-container'>
                    <img alt='challenges' src={challengesForDesktop} loading="lazy" onClick={showPicture}/>
                </div>
            </div>
        </div>
    )
};

export default CSSChallenge;


//