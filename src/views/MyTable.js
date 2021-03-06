import React, {useState} from 'react';
import Switch from '@material-ui/core/Switch';

const MyTable = (props) => {
  // destruct props
  const { sortDuplicateHeader, result } = props;

  //state
  const [checked, setChecked] = useState(false);
  const [sortYear, setSortYear] = useState(true);
  const [sortTitle, setSortTitle] = useState(true);

  // see in %
  const handleChange = (e) => {
    setChecked(!checked);
  };

  // sort by population per year and by landscape
  const listSorted = result;
  const handleSort = (idx) => {
    if(!idx){
      // for title
      sortTitle ? listSorted.sort((a, b) => (a.title > b.title) ? 1 : -1)
      : listSorted.sort((a, b) => (b.title > a.title) ? 1 : -1)
      setSortTitle(!sortTitle);
    } else
    // for population
    sortYear ? listSorted.sort((a, b) => a.data[idx-1].population - b.data[idx-1].population)
    : listSorted.sort((a, b) => b.data[idx-1].population - a.data[idx-1].population);
    setSortYear(!sortYear);
  }

  return (
    <>
    <div className="switch">
      <h3 className="show">Visa</h3>
      <p className="count">Antal</p>
      <p className="percent">Procent</p>
      <Switch
        className="handler"
        color="primary"
        checked={checked && checked}
        onChange={handleChange}
        name="checked"
      />
    </div>
      <table className="styled-table">
      <thead>
          <tr>
        {sortDuplicateHeader.map((header, idx) => {
        return <th onClick={()=> handleSort(idx)} key={idx}><span className="pointer" >{ header }</span></th>
        })}
          </tr>
      </thead>
      <tbody>
            {listSorted.map((res, idx) => {
              return(
                checked ? 
                <tr key={idx} className="alignLeft">
                  <td>{ res.title }</td>
                  <td>{ res.data[0].population }</td>
                  <td>{ Math.round((res.data[1].population / res.data[0].population + Number.EPSILON ) * 10000) / 10000}%</td>
                  <td>{ Math.round((res.data[2].population / res.data[1].population + Number.EPSILON ) * 10000) / 10000}%</td>
                </tr>
                :
                <tr key={idx} className="alignLeft">
                <td>{ res.title }</td>
                <td>{ res.data[0].population }</td>
                <td>{ res.data[1].population }</td>
                <td>{ res.data[2].population }</td>
              </tr>
              )
          })}
      </tbody>
  </table>
</>
  )
}

export default MyTable;
