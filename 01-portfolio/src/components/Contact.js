
// import Thanks from './Thanks.js';
// import {Route, BrowserRouter, Routes} from 'react-router-dom';
import contactHeader from '../img/headers/contact_4_rem.png';
import './Contact.css';
import { useEffect } from 'react';


export default function Contact() {

    useEffect(() => {
        window.scrollTo(0,0);
    })

    return (

            <div className="Contact container">
                    <h1 className='constellation_header_4'>
                        <img alt='header for contact' src={contactHeader}/>
                    </h1>
                    
                    <div className='flex-parent-two-coll'>
                        <div className='contact_text text-container'>
                            <p>
                            Greetings, fellow traveler from a galaxy far, far away!
                            </p>
                            <p>
                            If you've landed on this page, chances are you're looking to make a connection with a web developer who understands
                            both the Force and the intricacies of coding. Well, you've found your Jedi Master of websites!
                            </p>
                            <p>
                            You can drop me a message using any transmission device you fancy: an astromech droid's holographic projector, a communication beacon, or you can use this form. 
                            Whichever path you choose, I promise to respond faster than Han Solo can make the Kessel Run.
                            </p>
                        </div>

                        <form action="https://formsubmit.co/89f7a2105b81292e989a4eee19407380" method="POST" className='flex-container-col-2 contact__form'>
                            <input type="hidden" name="_subject" value="New message from portfolio page!" />
                            <input type="text" name="name" required placeholder='name'/>
                            <input type="email" name="email" required placeholder='email' />
                            <textarea name="text" required placeholder='text'></textarea>
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="https://hanavoriskova.cz/thanks" /> 
                            <button type="submit" className='primary-action-button'>Send</button>
                            
                        </form>

                    </div>

                    {/*
                        <Routes>
                            <Route path='/thanks' element={<Thanks />} />
                        </Routes> 
                        
                        it is enough that I have /thanks route in App.js > Routes, so it doesn't need to be here
                    */}

            </div>
   
    )
}