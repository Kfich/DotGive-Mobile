import axios from 'axios';

class Services {

  sendData(url, data) {

    console.log("The data on sendData Service ", data);
    axios.post(url, {
      console.log("SendData call executed", data, url);
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

  updateData(url, data, id){

    console.log("The data on update service /:id ", data);

    axios.post(url+id, {
      console.log("updateData call executed", data, url);
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

  deleteData(url, id){

    axios.get(url+id)
    .then().catch(err => console.log(err))
  }
}

export default Services;
