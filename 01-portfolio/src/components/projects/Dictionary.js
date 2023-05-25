
const Dictionary = (props) => {


    return(
        <div className="Dictionary container">
        
        <div className="col-1">
                <a><h2>Dictionary</h2></a> {/* img souhvezdi */}
                <h3>React Webpage</h3> {/* mensi font, ale UPPERCASE */}

                <p>On this webpage I am using 2 API calls. It is fully responsive.</p>

                <button>Visit website</button>
                <button>View code</button>
            </div>
            <div className="col-2">
                <img></img> {/*img printscreenu PC pro scroll */}
                <img></img> {/*img printscreenu PHONE pro scroll */}
                <img></img>{/* img fotky upravene pres inkscape s vyrizlym monitorem jako 2., protoze musi mit vyssi z-index  */}
            </div></div>
    )
};

export default Dictionary;

