import React, { useState } from 'react';
import MyTable from '../component/MyTable';
import MyTabs from '../component/MyTabs';
import Map from './Map';
import { landscape } from '../functions/LandscapeCode';
import {Tabs, Tab} from '@material-ui/core';


const Population = (props) => {
  const { query } = props;
  let output = landscape(query);
  const [value, setValue] = useState(0);

  // Table header 
  let sortDuplicateHeader = Array.from(new Set(output.map(q=>q.year)));
  sortDuplicateHeader.splice(0, 0,'Landskap');

  //
  
  const result = output.reduce((acc, d) => {
    const found = acc.find(a => a.title === d.title);

    const year = { year: d.year, pop: d.pop }; // the element in data property
    if (!found) {
      //acc.push(...value);
      acc.push({title:d.title, data: [year]}) // not found, so need to add data property
    }
    else {
      //acc.push({ name: d.name, data: [{ value: d.value }, { count: d.count }] });
      found.data.push(year) // if found, that means data property exists, so just push new element to found.data.
    }
    return acc;
  }, []);
  
  console.log(result)

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