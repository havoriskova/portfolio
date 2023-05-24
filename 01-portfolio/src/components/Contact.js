
// import Thanks from './Thanks.js';
// import {Route, BrowserRouter, Routes} from 'react-router-dom';


export default function Contact() {

    return (

            <div className="Contact container">
                Contact !!! // little game would be nicer

                    <form action="https://formsubmit.co/89f7a2105b81292e989a4eee19407380" method="POST">
                        <input type="hidden" name="_subject" value="New message from portfolio page!" />
                        <input type="text" name="name" required />
                        <input type="email" name="email" required />
                        <textarea name="text" required></textarea>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://hanavoriskova.netlify.app/thanks" /> 
                        <button type="submit">Send</button>
                        
                    </form>
{/* ve finale staci, ze mam /thanks route definovanou v App.js > Routes
                    <Routes>
                        <Route path='/thanks' element={<Thanks />} />
                    </Routes> */}

            </div>
   
    )
}