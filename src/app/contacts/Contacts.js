import React, {Component} from 'react';

export default class Contacts extends Component{
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge
        }
    }
    makeOver(){
        this.setState({
        age: this.state.age +10
        })
    }
    render() {
        return(
            <div>
                <h3>Vardas: {this.props.name}</h3>
                <p>El pastas: {this.props.email}</p>
                <p>Amzius: {this.state.age}</p>
                <button className={"btn btn-danger"} onClick={this.makeOver.bind(this)}>Please click</button>
            </div>
        )
    }
}


