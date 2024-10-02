import "../css/header.css"
import React, {Component} from "react"

class Header extends Component  {

    onChangeHandler=(e)=>{
        // console.log("changed")
        this.setState({
            keyword: e.target.value
        });
    }

    state = {
        title: "The name of my favourite book is: ",
        keyword: " "
    }



    render(){
        return (
                <div id="header">
                    <div className = "logoFlex">
                        <div className="logo"></div>
                        <div className ="logoText">LOGONAME</div>
                    </div>
        
                    <input 
                    type="text"
                    onChange={this.onChangeHandler}
                    />
                    {this.state.title}
                    {this.state.keyword}
                </div>
            )
        }
    }

    

export default Header;