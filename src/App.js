import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {restaurants: []}


  componentDidMount(){
    axios.get('https://api.yelp.com/v3/businesses/{id}')
    .then(res => {
      this.setState({restaurants: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    const { restaurants } = this.state
    return(
      <>
      < restaurants />
      </>
    )
  }
}



export default App;
