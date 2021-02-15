import React, {useState} from 'react';
import Switch from '@material-ui/core/Switch';


const Mytable = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(!checked);
  };
  const { sortDuplicateHeader, result } = props;

  console.log(result);


  // sort by population per year

  const listSorted = result;
  const [sortYear, setSortYear] = useState(false);
  const handleSort = (idx) => {
    sortYear ? listSorted.sort((a, b) => a.data[idx-1].pop - b.data[idx-1].pop)
    : listSorted.sort((a, b) => b.data[idx-1].pop - a.data[idx-1].pop);
    setSortYear(!sortYear)
  }

  return (
    <>
      <Switch
        checked={checked && checked}
        onChange={handleChange}
        name="checked"
      />
      <table className="styled-table">
      <thead>
          <tr>
        {sortDuplicateHeader.map((header, idx) => {
        return <th onClick={()=> handleSort(idx)} key={idx}>{ header }</th>
        })}
          </tr>
      </thead>
      <tbody>
            {result.map((res, idx) => {
              return(
                <tr key={idx} className="alignLeft">
                  <td>{ res.title }</td>
                  <td>{ res.data[0].pop }</td>
                  <td>{ res.data[1].pop }</td>
                  <td>{ res.data[2].pop }</td>
                </tr>
              )
          })}
      </tbody>
  </table>
</>
  )
}

export default Mytable
