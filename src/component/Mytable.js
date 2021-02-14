import React from 'react'

const Mytable = (props) => {

  const { sortDuplicateHeader, result } = props;

  console.log(result);
  return (
    <table className="styled-table">
    <thead>
        <tr>
      {sortDuplicateHeader.map((header, idx) => {
       return <th key={idx}>{ header }</th>
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
  )
}

export default Mytable
