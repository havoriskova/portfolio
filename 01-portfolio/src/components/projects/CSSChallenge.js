import cssHeader from '../../img/headers/CSS_CHALLENGES_5_rem.png'
import githubLogo from '../../img/github-logo.png';

const CSSChallenge = (props) => {


    return(
        <div className="project container">
            <div className="col-1">
                <h2 className='constellation_header_5'>
                    <img alt='header for CSS challenge' src={cssHeader}/>
                </h2>

                <h3>React Webpage</h3> {/* mensi font, ale UPPERCASE */}

                <div className='project_photo_phone_width'>
                    <p>budouci fotka pro telefony</p>{/* <img alt='printscreen of page' src={}/> tady bude fotka optimalizovana pro telefon */}
                </div>

                <p>This responsive webpage is my gallery of CSS challenges made in React. I started the 100dayscss challenge in vanilla JS, but after some while I decided to redo the challenges in React.</p>

                    <a className='projectsLink' href='https://voriskova-css-challenge.netlify.app/' target='_blank' rel='noreferrer'>Visit website</a>
                    <a className='projectsLink' href='https://github.com/havoriskova/react-and-css-challenges' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>
            </div>
            <div className="col-2">
                {/*img printscreenu pro scroll */}
               <p>budouci fotka pro desktop</p> {/* img optimalizovane pro pc */}
            </div>
            <div className="projects-hr"></div>
        </div>
    )
};

export default CSSChallenge;


//