import React from 'react'
import './Page.css'
import Avatar from './Avatar'
import Info from './Info'
import Features from './Features'




const API = "https://jsonplaceholder.typicode.com/users"

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      k : []
    };
    
  }

  

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(users => {
          users.forEach((value) => {
            value.like = 0;
          })
          this.setState({
            users : users,
            k : users
          })
        }
          
          );
     
  }

  changeName = (val, i, field) => {
    if(field === 'name'){
      
      let array = [];
      
      this.state.k.forEach( value => array.push(value));
      array[i].name = val;
      this.setState({
        k : array
      })
    }
    else if (field === 'email'){
      
      let array = [];
      
      this.state.k.forEach( value => array.push(value));
      array[i].email = val;
      this.setState({
        k : array
      })
    }
    else if (field === 'phone'){
      
      let array = [];
      
      this.state.k.forEach( value => array.push(value));
      array[i].phone = val;
      this.setState({
        k : array
      })
    }
    else if (field === 'website'){
      
      let array = [];
      
      this.state.k.forEach( value => array.push(value));
      array[i].website = val;
      this.setState({
        k : array
      })
    }
    
      
  }
  
  LikeUnlike = (i, l) => {
    let array = [];
    this.state.users.forEach((value) => {
      array.push(value)
    })
    array[i].like = l;
    this.setState({
      users : array
    })
  }
  del = (i) => {
    let array = [];
    this.state.users.forEach((value) => {
      array.push(value);
    })

    array.splice(i, 1);
    this.setState({
      users : array,
      k : array
    })

  }
  submitFunc = (name, email, phone, website, i, e) => {

    
    let array = [];
    this.state.users.forEach((value) => {
      array.push(value);
    })

        array[i].name = name;
        array[i].email = email;
        array[i].phone = phone;
        array[i].website = website;
    this.setState({
      users : array,
      k : array

    })
    e.preventDefault();
    
  }
  render() {

    return (
      <div className="contr">{this.state.k.map( (value, index) => {

        return  (<div class="card col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <Avatar user = {this.state.users} i = {index} />
            
            <Info user = {this.state.users} i = {index} /> 
              <Features user = {this.state.k} i = {index} LikeUnlike = {this.LikeUnlike} delet = {this.del} changeName = {this.changeName} submitFunc = {this.submitFunc} />
        </div>)
        }
        )}</div>
    );
    
  }
}

export default Page