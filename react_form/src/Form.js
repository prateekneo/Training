import React, { Component } from 'react'

class Form extends Component{
    constructor(props){
        super(props);
    }
    callfunc = (e) => {
        
         this.props.handleSubmit(e.target.elements.name.value,  e.target.elements.age.value, 1)
         e.preventDefault()
    }
    render(){
        
        return (
            <div className="form">
                <form onSubmit={this.callfunc} >
                    <div className="div_name">
                        <label htmlFor="name_input"> Name :</label>
                        <span className="span_name"><input className="name" id = "name" type="text" /></span>
                    </div>
                    <div className="div_age">
                        <label htmlFor="age_input">Age :</label>
                        <span className="span_age"><input className="age" id = "age" type="number" /></span>
                    </div>
                    <input className="submit" type="submit" value="Submit"  />
                </form>
            </div>
        )
    }

}

export default Form