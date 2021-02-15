import React, {useState} from 'react';
import map from '../assets/map.png';

import './map.css';

const Map = ({result}) => {
  const [landscape, setLandscape] = useState({});

const onHover = (text) => {
  setLandscape(result.find(res => res.title === text));
}

const card = (
  <div className="card">
    <div className="landscape">
      <p style={{fontSize:'20px'}}>{landscape.title}</p>
    </div>
    <div className="year17">
      <p>2017</p>
    </div>
    <div className="year18">
      <p>2018</p>
    </div>
    <div className="year19">
      <p>2019</p>
    </div>
  </div>
);

  return (
    <div className="map">
      <img src={map} alt="map of sweden" useMap="#map" />
        <map name="map">
          <area shape="poly" 
          coords="100, 200 , 185, 265, 280, 50, 235,5, 100,200" 
          alt="lappland"  id="lappland" 
          onMouseOver={()=>onHover('Lappland')}
          onMouseLeave={()=>setLandscape({})} />
        </map>
        {landscape ? card : null}
    </div>
  )
}

export default Map;
