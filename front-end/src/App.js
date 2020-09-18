import React, { Component } from 'react';
import './App.css';
import MainNav from './components/MainNav';
import NavBar from './components/NavBar';

class App extends Component {

  constructor() {
    super();
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testApi")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err)
}


componentDidMount() {
    this.callAPI();
}

  render () {
    return (

      <React.Fragment>
  
  
        <div id="wrapper">
  
          <NavBar />
          <MainNav />
  
        </div>

        <p className="App-intro">;{this.state.apiResponse}</p>
  
  
      </React.Fragment>
  
    );
  }


}

export default App;
