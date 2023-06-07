import aboutHeader from '../img/headers/about_6_rem.png';
import aboutImage from '../img/about.jpeg';


const About = () => {

    return(
        <>
            <h2 className='constellation_header_6'>
                        <img alt='header for about' src={aboutHeader}/>
            </h2>
            <p></p>
            <img className='LennonWallImg' alt='me with font jokes on Lennon wall' src={aboutImage}/>
        </>
    )
};

export default About;