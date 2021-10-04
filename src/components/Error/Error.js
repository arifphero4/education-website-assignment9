import React from 'react';
import img from '../../images/maxresdefault.jpg'

const Error = () => {
    return (
        <div style={{height:"100vh"}}>
            <img  className="error" src={img} alt="" />
        </div>
    );
};

export default Error;