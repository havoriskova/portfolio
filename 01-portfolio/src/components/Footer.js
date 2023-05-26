import "./Footer.css";
import robots from '../img/robots_footer_pc.png';
//import robot from '../img/robot_footer_phone.png'; //pod 400px width


const Footer = (props) => {


    return(
        <>

            <div className="robots_container">
                {/* <img alt="robots" src={robot} srcset={`${robot} 590w, ${robots} 1087w`} sizes="(max-width: 400px) 300px, 700px"/> */}
                {/* <img alt="robots" src={robot} srcset={`${robot}, ${robots} 2x`}/> */}
                {/* <img alt="robots" src={robot} srcset={`${robot} 590w, ${robots} 1087w`} sizes="(max-width: 400px) 90vw, 50vw"/> */}
                <img alt="robots" src={robots} />
            </div>
            <div className="hr"></div>
            <p>Coded by <a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US" rel="noreferrer" target='_blank'>Hana Voriskova</a>
            </p>
        </>
    )
};

export default Footer;


//