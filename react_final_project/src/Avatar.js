import React, { Component } from 'react'

class Avatar extends Component{
    constructor(props){
        super(props);
    }

    render(){

        
        let src = "https://avatars.dicebear.com/v2/avataaars/"+ this.props.user[this.props.i].username + ".svg?options[mood][]=happy";

        return (<div className="avatar">
        <div className="avatar_div">
          <img src={src} alt="image" />
          </div>
  
      </div>)
    }
}

export default Avatar