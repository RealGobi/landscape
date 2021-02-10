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
      {query ?
      <>
            <ul>
           <h2>År: {sortDuplicateYear.map(q=><li className="year" key={q}>{q}</li>)}</h2> 
          </ul>
          {sortDuplicateTitle.map(q=><p key={q}>{q}</p>)}
      </>
        : 
        <p>Loading...</p>
        }

    </div>
  );

}

export default Population;