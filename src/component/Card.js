import React from 'react';

import './card.css';

const Card = ({ title, data }) => {
  return (
      <div className='card'>
        <div className="landscape">
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{title ? title : 'Landskap'}</p>
        </div>
        { data ?
          data.map((item, idx) => {
            return (
              <div className={'year'+item.year} key={idx}>
                <p style={{ fontWeight: 'bold' }}>{item.year}</p>
                <p>{item.population }</p>
              </div>
            )
          })
        :    
        <div className="year2018">
          <p style={{ fontWeight: 'bold' }}>År</p>
          <p>Folkmängd</p>
        </div>
        }
      </div>
  )
}
export { Card };