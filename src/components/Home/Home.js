import React, { useEffect, useState } from "react";
import Features from "../Features/Features";
import "./Home.css";
const Home = () => {

    const [features, setFeatures ] = useState([]);

    useEffect ( () => {
      fetch('./services.JSON')
      .then(res => res.json())
      .then(data => setFeatures(data));
    }, [])
  return (
   <div>
     <div className="header py-5" >
         <h1> Technique Easy Education</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, assumenda?</p>
      </div>
     <h1 className="py-3">Featured Courses</h1>

      <div className="home-container">


      {
        features.map(feature => <Features
          key={feature.key}
          feature={feature}></Features>)
      }
    </div>
   </div>
  );
};

export default Home;
