import React, {Component} from "react";

export default class Sell extends Component{
    constructor() {
        super();
        this.state = {message: ""}
    }
    getDiscount(){
        this.setState({message: "Jus gaunate -20% nuolaida"})
    }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.getDiscount.bind(this)}>Daugiau</button>
            </div>
        )
    }
}