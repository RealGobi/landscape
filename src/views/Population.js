import Mytable from '../component/Mytable';
import { landscape } from '../functions/LandscapeCode';



const Population = (props) => {
  const { query } = props;
  let output = landscape(query);
  
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

  return (
    <div className="container">
     <Mytable result={result} sortDuplicateHeader={sortDuplicateHeader} />
    </div>
  );

}

export default Population;