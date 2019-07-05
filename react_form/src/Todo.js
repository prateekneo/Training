import React, { Component } from 'react'
import TimeField from 'react-simple-timefield';
//import DateTimePicker from 'react-datetime-picker'
//import TodoList from './Todo_list'
//import Datetime from 'react-datetime'

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr : [],
            priority_sort_flag : 0,
            time_sort_flag : 0,
            status_sort_flag : 0,
            time : "00:00",
        }
    }
    saveTodo = (e) => {
        let a = [{
            "task" : e.target.elements.todo_input.value,
            "priority" : e.target.elements.todo_priority.value,
            "time" : this.state.time,
            "status" : "Incomplete",
            "show_status" : true
        }];
        this.setState({
            arr : [...this.state.arr, ...a]
        })
        e.preventDefault();
    }
    completed = (i) => {
        let array = [];
        this.state.arr.forEach( (value, index) => {
            if(index === i){
                 array.push(value);
                 array[index].status = "Completed";
            } else {
                array.push(value);
            }

        });
        this.setState({
            arr : array
        })
    }
    sortarray = () => {
        //alert('prateek');
            let array = [];
            this.state.arr.forEach( (value) => {
                array.push(value);
            });
            array.sort( (a, b) => {
                if(this.state.priority_sort_flag == 0){
                    if(parseInt(a.priority) > parseInt(b.priority)){
                        return 1; 
                    }
                    else{
                        return -1;
                    }
                } else {
                    if(parseInt(a.priority) < parseInt(b.priority)){
                        return 1; 
                    }
                    else{
                        return -1;
                    }
                }
            });
            if(this.state.priority_sort_flag == 0){
                this.setState({
                    arr : array,
                    priority_sort_flag : 1
                });
            } else{
                this.setState({
                    arr : array,
                    priority_sort_flag : 0
                });
            }
    }
    sortStatus = () => {
        //alert('prateek');
            let array = [];
            this.state.arr.forEach( (value) => {
                array.push(value);
            });
            array.sort( (a, b) => {
                if(this.state.status_sort_flag == 0){
                    if(a.status > b.status){
                        return 1; 
                    }
                    else{
                        return -1;
                    }
                } else {
                    if(a.status < b.status){
                        return 1; 
                    }
                    else{
                        return -1;
                    }   
                }
            });

            if(this.state.status_sort_flag == 0){
                this.setState({
                    arr : array,
                    status_sort_flag : 1
                });
            } else {
                this.setState({
                    arr : array,
                    status_sort_flag : 0
                });
            }
    }
    sortTime = () => {
        //alert('prateek');
            let array = [];
            this.state.arr.forEach( (value) => {
                array.push(value);
            });
            array.sort( (a, b) => {
                if(this.state.time_sort_flag == 0){
                    if(a.status > b.status){
                        return 1; 
                    }
                    else{
                        return -1;
                    }
                } else {
                    if(a.status < b.status){
                        return 1; 
                    }
                    else{
                        return -1;
                    }   
                }
            });

            if(this.state.time_sort_flag == 0){
                this.setState({
                    arr : array,
                    time_sort_flag : 1
                });
            } else {
                this.setState({
                    arr : array,
                    time_sort_flag : 0
                });
            }
    }
    del = (i) => {
        let array = [];
        this.state.temp_arr.forEach( (value, index) => {
            if(index === i){
                 
            } else {
                array.push(value);
            }

        });
        this.setState({
            arr : array,
            temp_arr : array
        })
    }
    handleFilter = () => {
        if(document.getElementById('filter_value').value == 'incomplete'){
            
            let array = [];
            this.state.arr.forEach((value, index) => {
                if(value.status == 'Incomplete'){
                    array.push(value);
                    array[index].show_status = true;
                    
                } else {
                    array.push(value);
                    array[index].show_status = false;
                    
                }
            })
            this.setState({
                arr : array
            })
        } else if (document.getElementById('filter_value').value == 'completed') {
            let array = [];
            this.state.arr.forEach((value, index) => {
                if(value.status == 'Completed'){
                    array.push(value);
                    array[index].show_status = true;
                    
                } else {
                    array.push(value);
                    array[index].show_status = false;
                }
            });
            this.setState({
                arr : array
            })
        } else {
            let array = [];
            this.state.arr.forEach((value, index) => {
                    array.push(value);
                    array[index].show_status = true;
            })
            this.setState({
                arr : array
            })
        }
    }

    showModal = () => {
        document.getElementById('id01').style.display = 'block';
    }
    render() {
        return (
            <div className="div_ele">
                
                <div className="form_div">
                 <h1 onClick={this.showModal}>TODO</h1>
                 <div id="id01" className="w3-modal">
    <div className="w3-modal-content">
      <div className="w3-container">
        <span onClick={ () => document.getElementById('id01').style.display='none'} className="w3-button w3-display-topright">&times;</span>
        
                    <h1>TODO</h1>
                    <form onSubmit={this.saveTodo}>
                        <div className = "input_div">
                            <label htmlFor="label_todo">Task :</label>
                            <span id="input_span"><input type="text" id="todo_input" className="todo_input" /> </span>
                        </div>
                        <div className = "priority_div">
                            <label htmlFor="label_priority">Priority :</label>
                            <span id="priority_span"><input type="number" id="todo_priority" /></span>
                        </div>
                        <div className = "time_div">
                            <label htmlFor="label_time">Time :</label>
                            <span id="time_span"><TimeField value={this.state.time} onChange={(value) => this.setState({time : value})} id="todo-time" input={<input type="text" />} colon=":" /></span>
                        </div>
                        <input type="submit" className="submit" value="Create Todo" />
                    </form>
                    </div>
    </div>
  </div>
                </div>
                <div className="container">
                    <label>Filter :</label>
                    <select onChange={this.handleFilter} id="filter_value">
                        <option value="0">--Select Status--</option>
                        <option value="completed">Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                    <table>
                        <tbody>
                        <tr><th>Todo </th><th>Priority<button onClick={this.sortarray}><span className="glyphicon glyphicon-sort"></span>Sort</button></th><th>Time<button onClick={this.sortTime}><span className="glyphicon glyphicon-sort"></span>Sort</button></th><th>Status<button onClick={this.sortStatus}><span className="glyphicon glyphicon-sort"></span>Sort</button></th><th>Mark as Completed</th><th>Delete</th></tr>
            {this.state.arr.map( (value, index) => (value.show_status == true)?<tr><td>{value.task}</td><td>{value.priority}</td><td>{value.time}</td><td>{value.status}</td><td><button onClick={() => this.completed(index)}><span class="glyphicon glyphicon-ok"></span></button></td><td><button onClick={() => this.del(index)}><span class="glyphicon glyphicon-trash"></span></button></td></tr>:null )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Todo