import React, { useEffect, useState } from 'react';
import Population from './views/Population';
import axios from 'axios';
import { sqlQuery } from './functions/SqlQuery';

import './App.css';

function App() {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    axios.post('/OV0104/v1/doris/sv/ssd/START/BE/BE0101/BE0101A/FolkmangdDistrikt', sqlQuery)
    .then(res => {
      setQuery(res.data.data);
    })
  }, []);



  return (
    <div className="App">
      <Population query={query} />
    </div>
  );
}

export default App;
