import React, { Component } from 'react'
import Modal from './Modal'

class Features extends Component{

    constructor(props){
        super(props);
    }
    del = () => {
        this.props.delet(this.props.i);
    }
    changeLike = (i, l) => {
        this.props.LikeUnlike(i, l);
    }
    change_field = (val, i, field) => {
        if(field === 'name')
            this.props.changeName(val, i, 'name');
        else if (field === 'email')
            this.props.changeName(val, i, 'email');
        else if (field === 'phone')
            this.props.changeName(val, i, 'phone');
        else if (field === 'website')
            this.props.changeName(val, i, 'website');
    }
    submitFunc = (name, email, phone, website, i, e) => {
        
        this.props.submitFunc(name, email, phone, website, i, e);
    }
    render(){

        
        let modal_id = "#myModal" + this.props.user[this.props.i].id;

        return (<div class="features row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          {(this.props.user[this.props.i].like === 0)?<span class="glyphicon glyphicon-heart-empty heart" onClick={() => this.changeLike(this.props.i, 1)}></span>:<span class="
glyphicon glyphicon-heart heart" onClick={() => this.changeLike(this.props.i, 0)}></span>}
          
        </div> 
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 pencil">
          <span class="glyphicon glyphicon-pencil"  data-toggle="modal" data-target={modal_id}></span>
          <Modal user={this.props.user} i={this.props.i} change_field={this.change_field} submitFunc = {this.submitFunc} />
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 trash">
          <span class="glyphicon glyphicon-trash" onClick={this.del}></span>
            
        </div>
        </div>)
    }
}

export default Features