import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Show extends Component{
    //const element = <App />;
    constructor(){
        super();
        
        this.state = {
            value: 0
        }
    }
   
    decrease = () => {
        let a = this.state.value;
        this.setState({
            value : a-1
        });
        
    };
    increase = () => {
        let a = this.state.value;
        this.setState({
            value : a+1
        })
    }
    render(){
        return ((this.state.value !== 0)?<div className="counter"><button id="dec" onClick={this.decrease}>-</button>{this.state.value}<button id="inc" onClick={this.increase}>+</button></div>:<div className="counter">{this.state.value}<button id="inc" onClick={this.increase}>+</button></div>)
    } 
}
ReactDOM.render(<Show />, document.getElementById('root'))