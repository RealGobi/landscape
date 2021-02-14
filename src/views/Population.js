import { landscape } from '../functions/LandscapeCode';



const Population = (props) => {
  const { query } = props;
  let output = landscape(query);
  console.log(output);

  
  // output names of landscape
  const sortDuplicateLandscape = Array.from(new Set(output.map(q=>q.title)));

  // Table header 
  let sortDuplicateHeader = Array.from(new Set(output.map(q=>q.year)));
  sortDuplicateHeader.splice(0, 0,'Landskap');
  
  // Get population per year in arr
  let year17 = [];
  let year18 = [];
  let year19 = [];

  output.map(out => {
    if(out.year === sortDuplicateHeader[1]) {
      year17.push(out);
    }
    if(out.year === sortDuplicateHeader[2]) {
      year18.push(out);
    }
    if(out.year === sortDuplicateHeader[3]) {
      year19.push(out);
    }
  });

  console.log(output);

  return (
    <div className="container">
      <table className="styled-table">
    <thead>
        <tr>
      {sortDuplicateHeader.map((header, idx) => {
       return <th key={idx}>{ header }</th>
      })}
        </tr>
    </thead>
    <tbody>
        <tr className="alignLeft">
          {sortDuplicateLandscape.map((land, idx) => {
           return <td key={idx}>{land}</td>
          })}
        </tr>
        <tr>
           {year17.map((year, idx) => {
           return <td key={idx}>{year.pop}</td>
          })}
        </tr>
        <tr>
           {year18.map((year, idx) => {
           return <td key={idx}>{year.pop}</td>
          })}
        </tr>
        <tr>
           {year19.map((year, idx) => {
           return <td key={idx}>{year.pop}</td>
          })}
        </tr>
    </tbody>
</table>
{/*       {query ?
      <>
      <div className="heading">
        <ul>
          <h2>År: {sortDuplicateYear.map(q=><li key={q}>{q}</li>)}</h2> 
        </ul>
      </div>
      <div className="landscape">
          {sortDuplicateTitle.map(q=><p key={q}>{q}</p>)}
      </div>
      <div className="year17">{year17.map((year, idx) => {
       return <div key={idx}>{year.pop}</div>
      })}</div>
      <hr/>
      <div className="year18">{year18.map((year, idx) => {
       return <div key={idx}>{year.pop}</div>
      })}</div>
      <hr/>
      <div className="year19">{year19.map((year, idx) => {
       return <div key={idx}>{year.pop}</div>
      })}</div>
      </>
        : 
        <p>Loading...</p>
        } */}
    </div>
  );

}

export default Population;