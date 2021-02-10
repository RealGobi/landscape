import { landscape } from '../functions/LandscapeCode';


const Population = (props) => {
  const { query } = props;
  let output = landscape(query);
  console.log(output);

  
  // output names of landscape
  const sortDuplicateTitle = Array.from(new Set(output.map(q=>q.title)));
  const sortDuplicateYear = Array.from(new Set(output.map(q=>q.year)));
  return (
    <div>
      {query && sortDuplicateYear.map(q=><p key={q}>{q}</p>)}
      {query && sortDuplicateTitle.map(q=><p key={q}>{q}</p>)}
    </div>
  );

}

export default Population;