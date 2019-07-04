import React, { Component } from 'react'

class Form extends Component{
    callfunc = (e) => {
        
         this.props.handleSubmit(e.target.elements.name.value,  e.target.elements.age.value)
         e.preventDefault()
    }
    render(){
        
        return (
            <div>
                <form onSubmit={this.callfunc} >
                    <label>Name :</label>
                    <input id = "name" type="text" />
                    <label>Age :</label>
                    <input id = "age" type="number" />
                    <input type="submit" value="Submit"  />
                </form>
            </div>
        )
    }

}

export default Form