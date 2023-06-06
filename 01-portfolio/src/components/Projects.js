import CSSChallenge from "./projects/CSSChallenge.js";
import Dictionary from "./projects/Dictionary.js";
import Planner from "./projects/Planner.js";
import Weather from "./projects/Weather.js";
import Icf from "./projects/Icf.js";
// import Resume from "./projects/Resume.js";
import headerProject from '../img/headers/projects_4_rem.png';
import './Projects.css';


const Projects = (props) => {


    // scroll, paralax effect

    return(
        <div className="Projects container">
            <h1 className='constellation_header_4'>
                <img alt='header for contact' src={headerProject}/>
            </h1>


            <Planner />
            <Icf />
            <Dictionary />
            <Weather />
            <CSSChallenge />
            {/* <Resume />  */}


        </div>
    );
};


export default Projects;