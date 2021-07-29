import React, { Component } from "react";
class Alert extends Component {
    render(){
        let color = this.props.color;
        let style = "alert alert-" + color;
        let title = this.props.title;
        let message = this.props.children;
    return (
        //bungkus dengan satu divv
        <div className={style}>
            <h4 className="alert-title">{title}</h4>
            {message}
        </div>
    )
}
    
}
export default Alert