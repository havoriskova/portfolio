import "./Footer.css";
import robots from '../img/robots_footer_pc.png';
//import robot from '../img/robot_footer_phone.png'; //pod 400px width
import logoLinkedin from '../img/linkedin-logo.png';
import logoGithub from '../img/github-logo.png';


const Footer = (props) => {


    return(
        <>

            <div className="robots_footer_container">
                {/* <img alt="robots" src={robot} srcset={`${robot} 590w, ${robots} 1087w`} sizes="(max-width: 400px) 300px, 700px"/> */}
                {/* <img alt="robots" src={robot} srcset={`${robot}, ${robots} 2x`}/> */}
                {/* <img alt="robots" src={robot} srcset={`${robot} 590w, ${robots} 1087w`} sizes="(max-width: 400px) 90vw, 50vw"/> */}
                <img alt="robots" src={robots} />
            </div>
            <div className="hr"></div>
            <div>Coded by <a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US" rel="noreferrer" target='_blank'>Hana Voriskova</a>
            </div>
            <div className="socials">
                <div><a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US" rel="noreferrer" target='_blank'><img className='socials-img' alt='logo of linkedin' src={logoLinkedin}/></a></div>
                <div><a href="https://github.com/havoriskova" rel="noreferrer" target='_blank'><img className='socials-img' alt='logo of github' src={logoGithub}/></a></div>
            </div>
        </>
    )
};

export default Footer;


//