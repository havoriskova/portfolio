
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

                    <form action="https://formsubmit.co/89f7a2105b81292e989a4eee19407380" method="POST">
                        <input type="hidden" name="_subject" value="New message from portfolio page!" />
                        <input type="text" name="name" required placeholder='name'/>
                        <input type="email" name="email" required placeholder='email' />
                        <textarea name="text" required placeholder='text'></textarea>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://hanavoriskova.netlify.app/thanks" /> 
                        <button type="submit" className='primary-action-button'>Send</button>
                        
                    </form>

                    {/*
                        <Routes>
                            <Route path='/thanks' element={<Thanks />} />
                        </Routes> 
                        
                        it is enough that I have /thanks route in App.js > Routes, so it doesn't need to be here
                    */}

            </div>
   
    )
}