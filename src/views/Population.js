import React, { useState } from 'react';
import MyTable from '../component/MyTable';
import MyTabs from '../component/MyTabs';
import Map from './Map';
import { landscape } from '../functions/LandscapeCode';
import {Tabs, Tab} from '@material-ui/core';


const Population = (props) => {

  // destruct props
  const { query } = props;

  // pass quary in to landscape func
  let output = landscape(query);

  // state
  const [value, setValue] = useState(0);

  // Table header 
  let sortDuplicateHeader = Array.from(new Set(output.map(q=>q.year)));
  sortDuplicateHeader.splice(0, 0,'Landskap');

  // remove duplicate of key: title and push to one arr
  const result = output.reduce((acc, d) => {
    const found = acc.find(a => a.title === d.title);

    const year = { year: d.year, pop: d.pop }; 
    if (!found) {
      acc.push({title:d.title, data: [year]});
    }
    else {
      found.data.push(year);
    }
    return acc;
  }, []);
  
  // select tab
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
    <nav>
      <Tabs indicatorColor="primary" value={value} onChange={handleChange}>
        <Tab label="Tabell" />
        <Tab label="Karta" />
      </Tabs>
    </nav>
      <div className="container">
        <MyTabs value={value} index={0}>
            <MyTable result={result} sortDuplicateHeader={sortDuplicateHeader} />
        </MyTabs>
        <MyTabs value={value} index={1}>
          <Map result={result} />
        </MyTabs>
      </div>
    </>
  );

}

export default Population;