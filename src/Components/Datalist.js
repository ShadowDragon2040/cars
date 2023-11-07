import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7049/cars')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default DataList;
