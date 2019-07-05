import React, { Component } from 'react'
import Form from './Form'
import Reservation from './Select'
import './App.css'

class App extends Component{
      constructor(props){
        super(props);
        this.textInput = '';
        this.state = {
            name : null,
            age : null          
        }
      }
  handleSubmit = (name, age, flag) => {

    if(flag === 1){
      document.getElementById('id01').style.display = "block";
    }
    this.setState({
      name : name,
      age : age
    })
  }
  close = () => {
    document.getElementById('id01').style.display = "none";
    
  }
  render() {        
      return (
              <div className="container">
              
              <Form handleSubmit = {this.handleSubmit} />
              <div className="labels">
                <div id="id01" className="w3-modal">
                  <div className="w3-modal-content">
                    <div className="w3-container">
                      <span onClick={this.close} className="w3-button w3-display-topright">&times;</span>
                      <p>Name : {this.state.name}</p>
                      <p>Age  : {this.state.age}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
      );
  }
}

export default App