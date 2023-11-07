import axios from 'axios';

function Delete(id, callback) {
  axios.delete(`https://localhost:7049/cars/${id}`)
    .then(response => {
      console.log('Data deleted:', response.data);
      callback();
    })
    .catch(error => {
      console.error('Error deleting data:', error);
    });
}

export default Delete;