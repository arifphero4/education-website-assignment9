import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,  faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



const Footer = () => {
    const footerIcon ={
        fontSize:"28px"
        
    }
    return (
        <div>
            <footer className=" py-3 my-2 bg-dark text-white">
                <ul className="nav justify-content-center  pb-3  fs-4">
                    <li className="nav-item mx-2"> <Link className="text-decoration-none text-white" to="/home">Home</Link></li>
                    <li className="nav-item mx-2"><Link className="text-decoration-none text-white" to="/services">Services</Link></li>
                    <li className="nav-item mx-2"><Link className="text-decoration-none text-white" to="/about">About</Link></li>
                    <li className="nav-item mx-2"><Link className="text-decoration-none text-white" to="/contact">Contact</Link> </li>
                   
                </ul>
                <ul style={footerIcon} className="nav justify-content-center border-bottom pb-2 ">
                <li  className="mx-3"><FontAwesomeIcon icon={faFacebook} /></li>
                <li className="mx-3"> <FontAwesomeIcon icon={faTwitter} /></li>
                <li className="mx-3"><FontAwesomeIcon icon={faYoutube} /></li>
                <li className="mx-3"><FontAwesomeIcon icon={faInstagram} /></li>
                </ul>

                <p className="text-muted pt-2 ">Copyright © 2021, Technique Easy Education - All Rights Reserved</p>



            </footer>
          
        </div>
    );
};

export default Footer;