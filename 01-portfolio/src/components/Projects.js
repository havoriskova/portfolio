import CSSChallenge from "./projects/CSSChallenge.js";
import Dictionary from "./projects/Dictionary.js";
import Planner from "./projects/Planner.js";
import Weather from "./projects/Weather.js";
import Icf from "./projects/Icf.js";
import Resume from "./projects/Resume.js";


const Projects = (props) => {


    // scroll, paralax effect

    return(
        <div className="Projects container">
            <Weather />
            <Planner />
            <CSSChallenge />
            <Dictionary />
            <Icf />
            <Resume /> 


        </div>
    );
};


export default Projects;