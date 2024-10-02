import React, {Component} from "react"

class NewComponent extends Component {

    render(){

        const parent = this.props.item.map((newItem) => {
            return(
                <div>
                    <h3>{newItem.title}</h3>
                    <p>{newItem.feed}</p>
                </div>
            )
        });

        return (
            <div>
                {parent}
            </div>
        )
    }
    
}
export default NewComponent;