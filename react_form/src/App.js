import React, { Component } from 'react'
import Form from './Form'

class App extends Component{
  
      state = {
          name : null,
          age : null          
      };
  handleSubmit = (name, age) => {
    this.setState({
      name : name,
      age : age
    })
  }

  render() {        
      return (
              <div>
              
              <Form handleSubmit = {this.handleSubmit} />
              <div>
              <div><label>Name : {this.state.name}</label></div>
              <div><label>Age : {this.state.age}</label></div>
              </div>
              </div>
      );
  }
}

export default App