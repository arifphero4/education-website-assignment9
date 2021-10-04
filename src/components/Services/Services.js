import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import './Services.css';

const Services = () => {
 
    const [details, setDetails] = useState([]);

    useEffect ( () => {
      fetch('./advServices.JSON')
      .then(res => res.json())
      .then(data => setDetails(data));
    }, [])
  return (
   <div>
     
     <h1 className="py-3">Our Advanced Courses</h1>

      <div className="services-container">


      {
        details.map(detail => <Details 
          key={detail.key}
          detail={detail}
          ></Details>)
      }
    </div>
   </div>
  );
};


export default Services;
