import "./Footer.css";
import robots from '../img/robots_footer_pc.png';
//import robot from '../img/robot_footer_phone.png';


const Footer = (props) => {


    return(
        <>

            <div className="robots_container">
                <img alt="robots" src={robots}/>
            </div>
            <div className="hr"></div>
            <p>Coded by <a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US" rel="noreferrer" target='_blank'>Hana Voriskova</a>
            </p>
        </>
    )
};

export default Footer;


//