import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'


class Show extends Component{
    //const element = <App />;
    constructor(){
        super();
        
        this.state = {
            value : 0,
            arr : []
        }
    }
    increase = () => {
        let a = this.state.value;
        this.setState({
            value : a+1,
            arr : [...this.state.arr, a+1]
        })
    }
    render(){
        return (<div><div>{this.state.value}<button id="inc" onClick={this.increase}>+</button></div><div>{this.state.arr.map(asd => <App val = {asd}/>)}</div></div> )
    } 
}
ReactDOM.render(<Show />, document.getElementById('root'))