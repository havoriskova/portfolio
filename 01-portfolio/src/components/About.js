import aboutHeader from '../img/headers/about_6_rem.png';
import aboutImage from '../img/about.jpeg';


const About = () => {

    return(
        <>
            <h2 className='constellation_header_6'>
                        <img alt='header for about' src={aboutHeader}/>
            </h2>
            <div className='about_text'>
                <p>Hello there! I'm Hana, a web developer hailing from the Czech Republic and currently residing 
                in the Netherlands. As an avid fan of Star Wars, I've learned to wield the force of web development over the past three years.</p>

                <p>When I'm not exploring galaxies far, far away, I'm diving into the realms of vanilla JavaScript, CSS, React, and Next.js. I believe in the Force of clean, well-structured code, ensuring that my creations not only function flawlessly but also maintain a balance between readability and maintainability.</p>
                {/* <p>Remember, collaboration is strong with this one! I value effective communication and teamwork, believing they are crucial elements for achieving successful project outcomes. Whether I'm working alongside clients, designers, or fellow developers, I strive to create exceptional web experiences that leave a lasting impact, much like the epic battles fought in a galaxy far, far away.</p> */}
                <p>So, as you explore my portfolio website, may the code be with you. If you have any questions or would like to embark on a web development adventure together, don't hesitate to reach out. Together, we can bring balance to the web development universe!</p>
                <p>May the Force be with you!</p>

            </div>
            <img className='LennonWallImg' alt='me with font jokes on Lennon wall' src={aboutImage}/>
        </>
    )
};

export default About;