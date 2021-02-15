import React, {useState} from 'react';
import Switch from '@material-ui/core/Switch';


const Mytable = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(!checked);
  };
  const { sortDuplicateHeader, result } = props;

  // sort by population per year and by landscape
  const listSorted = result;
  const handleSort = (idx) => {
    if(!idx){
      sortTitle ? listSorted.sort((a, b) => (a.title > b.title) ? 1 : -1)
      : listSorted.sort((a, b) => (b.title > a.title) ? 1 : -1)
      setSortTitle(!sortTitle);
    } else
    sortYear ? listSorted.sort((a, b) => a.data[idx-1].pop - b.data[idx-1].pop)
    : listSorted.sort((a, b) => b.data[idx-1].pop - a.data[idx-1].pop);
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
