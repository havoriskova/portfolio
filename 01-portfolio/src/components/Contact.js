
export default function Contact() {

    return (
        <div className="Contact container">
            Contact !!! // little game would be nicer

                <form action="89f7a2105b81292e989a4eee19407380" method="POST">
                    <input type="hidden" name="_subject" value="New message from portfolio page!" />
                    <input type="text" name="name" required />
                    <input type="email" name="email" required />
                    <textarea name="text" required></textarea>
                    <input type="hidden" name="_captcha" value="false" />
                    {/* <input type="hidden" name="_next" value="https://localhost:3000/pages/thanks.html" /> */}
                    <button type="submit">Send</button>
                    
                </form>

        </div>
    )
}