import headerICF from '../../img/headers/ICF_WEBSITE_5_rem.png'

const Icf = (props) => {


    return(
        <div className="project container">
            <h2 className='constellation_header_5'>
                <img alt='header for ICF' src={headerICF}/>
            </h2> {/* link => img souhvezdi */}
        </div>
    )
};

export default Icf;


// zalezi, co vyberes, ale klidne bych nechala Bootstrap, at jeden projekt s Bootstrapem v porfoliu mam !!