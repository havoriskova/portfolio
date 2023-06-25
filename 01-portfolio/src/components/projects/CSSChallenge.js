import cssHeader from '../../img/headers/CSS_CHALLENGES_5_rem.png'
import githubLogo from '../../img/github-logo.png';
import challengesForPhones from '../../img/challenges-for-phones.jpg';
import challengesForDesktop from '../../img/photos-for-scrolling/challenges.jpg';
import {useState} from 'react';

const CSSChallenge = ({url}) => {


    const [isPictureClicked, setGallery] = useState(false);
    const [src, setSrc] = useState('');

    const showPicture = (e) => {
       // console.log('show picture funkce funguje');
      //  console.dir(e.target.attributes);
       // console.log(e.target.attributes.src.nodeValue); // mi da tohle: /static/media/planner.1c242bf63d54130bfbfc.JPG, coz je adresa z hanavoriskova.netlify.app/static...
        const urlImg = url;
        const srcImg = e.target.attributes.src.nodeValue;
        setSrc(`${urlImg}${srcImg}`);
        setGallery(true);
    };

    const shutGallery = () => {
      //  console.log('shutGallery funguje');
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

                <h3>React Webpage</h3> {/* mensi font, ale UPPERCASE */}

                <div className='project_photo_phone_width'>
                    {/* <div className="Blob frame">
                        
                        <div className="center">
                            
                                <div className="circle"></div>
                                <div className="octagon"></div>
                                <div className="triangle"></div>
                                <div className="circle2"></div>
                                
                                <div className="kruh"></div>
                                <div className="containery-pro-konfety k-octa">
                                    <div className="container-pro-konfeta-o1"></div>
                                    <div className="container-pro-konfeta-o2"></div>
                                    <div className="container-pro-konfeta-o3"></div>
                                    <div className="container-pro-konfeta-o4"></div>
                                    <div className="container-pro-konfeta-o5"></div>
                                    <div className="container-pro-konfeta-o6"></div>
                                    <div className="container-pro-konfeta-o7"></div>
                                    <div className="container-pro-konfeta-o8"></div>
                                </div>
                                <div className="containery-pro-konfety k-trouh">
                                    <div className="container-pro-konfeta-t1"></div>
                                    <div className="container-pro-konfeta-t2"></div>
                                    <div className="container-pro-konfeta-t3"></div>
                                </div>
                        </div>

                    </div> */}
                    <img alt='' src={challengesForPhones}/>
                </div>

                <p>After starting the 100dayscss challenge in vanilla JS, I decided to redesign some of the challenges in React. That's why I created this responsive website to help me track my progress.</p>

                    <a className='projectsLink' href='https://voriskova-css-challenge.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                    <a className='projectsLink' href='https://github.com/havoriskova/react-and-css-challenges' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
            </div>
            <div className="col-2">
                {/*img printscreenu pro scroll */}
                    {/* <div className="Blob frame">
            
                        <div className="center">
                            
                                <div className="circle"></div>
                                <div className="octagon"></div>
                                <div className="triangle"></div>
                                <div className="circle2"></div>
                                
                                <div className="kruh"></div>
                                <div className="containery-pro-konfety k-octa">
                                    <div className="container-pro-konfeta-o1"></div>
                                    <div className="container-pro-konfeta-o2"></div>
                                    <div className="container-pro-konfeta-o3"></div>
                                    <div className="container-pro-konfeta-o4"></div>
                                    <div className="container-pro-konfeta-o5"></div>
                                    <div className="container-pro-konfeta-o6"></div>
                                    <div className="container-pro-konfeta-o7"></div>
                                    <div className="container-pro-konfeta-o8"></div>
                                </div>
                                <div className="containery-pro-konfety k-trouh">
                                    <div className="container-pro-konfeta-t1"></div>
                                    <div className="container-pro-konfeta-t2"></div>
                                    <div className="container-pro-konfeta-t3"></div>
                                </div>
                        </div>
        
                    </div> */}
                <div className='desktop-pictures-container'>
                    <img alt='challenges' src={challengesForDesktop} loading="lazy" onClick={showPicture}/> {/* img optimalizovane pro pc */}
                </div>
            </div>
            {/* <div className="projects-hr"></div> */}
        </div>
    )
};

export default CSSChallenge;


//