import React from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, } from '@fortawesome/free-solid-svg-icons';

const Details = (props) => {
    console.log(props.detail)
    const {title,  duration,details, price, img} = props.detail;
    return (
        <div>
            <div className="detail-container  ">

            <img className="mt-3"  src={img} alt="" />
            <h2 className="py-3">{title}</h2>
            <p>{details}</p>
            <p> duration: {duration}hr </p>
            <p>Price: <FontAwesomeIcon icon={faDollarSign} />{price}</p>

            

                <button className="btn-details"> View Details</button>

            
            </div>
        </div>
    );
};

export default Details;