import axios from 'axios';

var baseURL = 'http://staging.api.dotgive.io/v1';

class Services {

  sendData(url, data) {

    console.log("The data on sendData Service ", data);
    axios.post(baseURL+url, data)
    .then(res =>{
      console.log("The data response ", res.data);
      return res.data;
    })
    .catch(err => console.log(err))
  }
  /*
  updateData(url, data, id){

    console.log("The data on update service /:id ", data);

    axios.post(url+id, {
      console.log("updateData call executed", data, url);
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }*/

  deleteData(url, id){

    axios.get(url+id)
    .then().catch(err => console.log(err))
  }
}

export default Services;
