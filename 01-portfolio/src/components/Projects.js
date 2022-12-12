import CSSChallenge from "./projects/CSSChallenge.js";
import Planner from "./projects/Planner.js";
import Weather from "./projects/Weather.js";


const Projects = (props) => {


    // scroll, paralax effect

    return(
        <div className="Projects container">
            <Weather />
            <Planner />
            <CSSChallenge />


        </div>
    );
};


export default Projects;