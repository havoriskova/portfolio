import aboutHeader from '../img/headers/about_6_rem.png';
import aboutImage from '../img/about.jpeg';


const About = () => {
    // const isDesctop = window.matchMedia(`(min-width:800px)`).matches;

    return(
        <>
            <h2 className='About constellation_header_6'>
                        <img alt='header for about' src={aboutHeader} loading="lazy"/>
            </h2>

            <div className='flex-parent-about'>
                <div className='about_text'>
                    <p>Hello there! I'm Hana, a web developer hailing from the Czech Republic and currently residing 
                    in the Netherlands. Despite of the fact, that Yoda said I was too old to begin the training, I've learned to wield the force of web development over the past three years.</p>

                    <p>When I'm not laughing at Lennon's wall font jokes or exploring galaxies far, far away, I'm diving into the realms of vanilla JavaScript, CSS, React, and Next.js. I believe in the Force of clean, well-structured code, ensuring that my creations not only function flawlessly but also maintain a balance between readability and maintainability.</p>
                    {/* { isDesctop ? (<p>Remember, collaboration is strong with this one! I value effective communication and teamwork, believing they are crucial elements for achieving successful project outcomes. Whether I'm working alongside clients, designers, or fellow developers, I strive to create exceptional web experiences that leave a lasting impact, much like the epic battles fought in a galaxy far, far away.</p>) : null} */}
                    <p>So, as you explore my portfolio website, may the code be with you. If you have any questions or would like to embark on a web development adventure together, don't hesitate to reach out. Together, we can bring balance to the web development universe!</p>
                    <p>May the Force be with you!</p>

                </div>
                <div className='aboutImageContainer'>
                    <img className='LennonWallImg' alt='the web developer you are looking for' src={aboutImage} loading="lazy"/>
                </div>
            </div>
        </>
    )
};

export default About;