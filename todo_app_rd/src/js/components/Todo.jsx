import React, { Component } from 'react'
import FormShow from '../components/Form'
import Todo_l from './Todo_list'




class Todo extends Component {
    constructor(){
        super()
    }

    render(){

        return (
            <div className="container">
                <div className="form_container container"> 
                    <FormShow />    
                </div> 
                <div className="todo_list_container container">
                    <Todo_l />
                </div>   
            </div>
        )
    }
}

export default Todo