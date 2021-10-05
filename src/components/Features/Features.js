import React from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faEye, faUser } from '@fortawesome/free-solid-svg-icons';



const Features = (props) => {
    console.log(props.feature)
    const {title,  about,  duration, classes, img, Fee} = props.feature;
    return (
        <div>
            <div className="cart-child" >
              
                <img src={img} alt="" />
                <h2 className="py-3"> {title}</h2>
                <p>{about}</p>
                <h6>Price: <FontAwesomeIcon icon={faDollarSign} /> {Fee}</h6>
                <div className=" d-flex justify-content-center   " >
                    <p className="m-3"><FontAwesomeIcon icon={faUser} />{classes}k </p>
                    <p className="m-3"><FontAwesomeIcon icon={faEye} />{duration}k</p>
                   

                </div>

                <button className="btn-details"> View Details</button>
            
            </div>
        </div>
    );
};

export default Features;