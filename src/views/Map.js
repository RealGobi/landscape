import React, { useState } from 'react';
import { Card } from '../component/Card';
import { coords } from '../functions/coords';
import map from '../assets/map.png';

import './map.css';

const Map = ({result}) => {
  const [landscape, setLandscape] = useState({});

const onHover = (text) => {
  const item = result.find(res => res.title === text)
  setLandscape(item);
}
  return (
    <div className="map">
      <img src={map} alt="map of sweden" useMap="#map" />
        <map name="map">
          {coords.map((coord) => {
           return(
            <area key={coord.id} shape="poly" 
            coords={coord.coords} 
            alt="lappland"  id="lappland" 
            onMouseOver={()=>onHover(coord.title)}
            onMouseLeave={()=>setLandscape({})} />
           ) 
          })}
        </map>
        <Card title={landscape.title} data={landscape.data} /> 
    </div>
  )
}

export default Map;
