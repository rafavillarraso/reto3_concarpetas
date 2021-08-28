import React,{Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:this.props.initialValue
        }
    }
    decrement = () =>{
        this.setState({counter:this.state.counter - 1})
        }
    increment = () =>{
        this.setState({counter:this.state.counter + 1})
        }
    render(){
        return (<div className="counter">
            <button onClick={this.decrement}>-</button>
            <span>{this.state.counter}</span>
            <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Counter;