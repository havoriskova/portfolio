import headerICF from '../../img/headers/ICF_WEBSITE_5_rem.png';
import githubLogo from '../../img/github-logo.png';
import icfForPhones from '../../img/icf-for-phones.JPG';
import icfForDesktop from '../../img/photos-for-scrolling/icf.JPG';

const Icf = (props) => {


    return(
        <div className="project container">
            <div className="col-1">
            <h2 className='constellation_header_5'>
                <img alt='header for ICF' src={headerICF}/>
            </h2> {/* link => img souhvezdi */}

            <h3>Next.js website + contentful</h3> {/* mensi font, ale UPPERCASE */}

            <div className='project_photo_phone_width'>
                <img alt='desktop and phone with open website' src={icfForPhones}/>
            </div>

            <p>I was working as web developer in an interdisciplinary group of students in order to create website for International Conservation Fund. 
                Wireframes were made by students of web design in Figma. 
                This website is made in Next.js, and it's connected to headless CMS Contentful.
                For donating were used widgets from Donorbox and the Giving Block (crypto donating).</p>

                <a className='projectsLink' href='https://icf-website-havoriskova.vercel.app/' target='_blank' rel='noreferrer'>Visit website</a>
                <a className='projectsLink' href='https://github.com/havoriskova/icf-website' target='_blank' rel='noreferrer'><img className='projectsGithubLogo' src={githubLogo} alt='github logo'/>View code</a>

            
            </div>
            <div className="col-2">
                {/*img printscreenu pro scroll */}
                <div className='desktop-pictures-container'>
                    <img alt='desktop and phone with open website' src={icfForDesktop}  loading="lazy"/>
                </div>
               {/* img optimalizovane pro pc */}
            </div>
            <div className="projects-hr"></div>
        </div>
    )
};

export default Icf;


// zalezi, co vyberes, ale klidne bych nechala Bootstrap, at jeden projekt s Bootstrapem v porfoliu mam !!