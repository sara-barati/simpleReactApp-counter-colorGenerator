import React, {Component, useLayoutEffect} from "react"
class Color extends Component{

       
        render(){
            return(
            <div style={{display:"flex"}}>
            <span style={{backgroundColor:this.props.title , width:"15px", height:"15px", margin:"5px"}}></span>
            <div>{this.props.title}</div>
            </div>)
        }
    
}
export default Color