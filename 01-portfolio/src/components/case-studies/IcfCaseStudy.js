const IcfCaseStudy = (props) => {


    return(
        <div className="IcfCaseStudy container">
            <h2>ICF</h2> {/* img souhvezdi */}
            <h3>Next.js website</h3> {/* mensi font, ale UPPERCASE */}

            <p>Multidisciplinary project ..</p>

            <button>Visit website</button>
            <button>View code</button>


             {/*wireframu PC, a zminit, ze na telefon jsem to musela vymyslet dle nich sama */}
            <p>The time for this project was supposed to be 3 months. That caused quite challenge since the wireframes were still changing during the whole time of project phase.</p>

            <p>I was doing front end for form, which I also connected through /api to mailchimp service.</p>
            <p> Donorbox and donorbox crypto are widgets, which were provided in vanilla JavaScript, so I needed to adjust their code a bit for Next.js. </p>
            {/*screenshot s donorboxem a form */}


            <p>I started to do the blog section, but project phase ended up before I could implement dynamic routes, which I will definitely do in my next project. </p>
            {/*screenshot s blog section */}
        
       </div>
    )
};

export default IcfCaseStudy;
