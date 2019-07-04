import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Details extends Component{
    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
    }
    handleInput = (event) => {
        this.setState({
            value : event.target.value
        })
    }
    
    handleSubmit = (event) => {
        alert(event.target.value)
    }

    render (
        return (
            <form onSubmit = {this.handleInput}>
                <label>Name : </label>
                <input type="text" value={this.state.value} onChange={this.handleInput} />
                <input type="submit" value="Submit" />
            </form>
        )
    )
}