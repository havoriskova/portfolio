import './Loader.css';
import loaderImg1 from '../img/loaderImg1.jpg';
import loaderImg2 from '../img/loaderImg2.jpeg';


const Loader = (props) => {

    return(
        <div className="Loader container">
            <div className="frame">
                        <img  src={loaderImg1} alt=""/>
                        <img  src={loaderImg2} alt="" />
                        <svg>
                            <circle r="120" cx="126" cy="126"/>
                        </svg>
            </div>
        </div>
    )
};

export default Loader;