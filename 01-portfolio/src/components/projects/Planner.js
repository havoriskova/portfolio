
const Planner = (props) => {

    return(
        <div className="Planner container">
            <div className="col-1">
                <a><h2>Planner</h2></a> {/* img souhvezdi */}
                <h3>Vanilla JavaScript Webpage</h3> {/* mensi font, ale UPPERCASE */}

                <p>My goal was to create a generator of monthly planner in your desired style. 
                You can choose between one month or year option.</p>

                <button>Visit website</button>
                <button>View code</button>
            </div>
            <div className="col-2">
                <img></img> {/*img printscreenu pro scroll */}
                <img></img>{/* img fotky upravene pres inkscape s vyrizlym monitorem jako 2., protoze musi mit vyssi z-index  */}
            </div>
        </div>
    )
};

export default Planner;


// ze je to ve vanilla JS, a funguje to pro PC. V soucasne dobe mam rozpracovany i React Planner