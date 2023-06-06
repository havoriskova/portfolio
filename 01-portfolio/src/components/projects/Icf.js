import headerICF from '../../img/headers/ICF_WEBSITE_5_rem.png';
import githubLogo from '../../img/github-logo.png';

const Icf = (props) => {


    return(
        <div className="project container">
            <div className="col-1">
            <h2 className='constellation_header_5'>
                <img alt='header for ICF' src={headerICF}/>
            </h2> {/* link => img souhvezdi */}

            <h3>Next.js website + contentful</h3> {/* mensi font, ale UPPERCASE */}

            <div className='project_photo_phone_width'>
                <p>budouci fotka pro telefony</p>{/* <img alt='printscreen of page' src={}/> tady bude fotka optimalizovana pro telefon */}
            </div>

            <p>I was working as web developer in an interdisciplinary group of students in order to create website for International Conservation Fund. Wireframes were made by students of web design in Figma. This website is made in Next.js, and it's connected to headless CMS Contentful.</p>

                <a className='projectsLink' href='https://icf-website-havoriskova.vercel.app/' target='_blank' rel='noreferrer'>Visit website</a>
                <a className='projectsLink' href='https://github.com/havoriskova/icf-website' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>

            
            </div>
            <div className="col-2">
                {/*img printscreenu pro scroll */}
               <p>budouci fotka pro desktop</p> {/* img optimalizovane pro pc */}
            </div>
            <div className="projects-hr"></div>
        </div>
    )
};

export default Icf;


// zalezi, co vyberes, ale klidne bych nechala Bootstrap, at jeden projekt s Bootstrapem v porfoliu mam !!