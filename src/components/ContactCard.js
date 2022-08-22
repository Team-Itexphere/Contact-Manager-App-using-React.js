import React from "react";
import User from "../images/user.png";

const ContactCard =(props)=>{
const {id,name,email}=props.contact

    return(
        <div className="item">
            <img className="ui avatar image" src={User} alt="User"/>

        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>   
        </div>
        
        <i className="trash alternate  icon" style={{color:"red" ,marginTop:"7px"}} 
        onClick={() =>props.clickHandler(id)}></i>

        </div>
        
    )
}

export default ContactCard