import React,{Component, useState} from 'react';

// class Counter extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             counter:this.props.initialValue
//         }
//     }
//     decrement = () =>{
//         if(this.state.counter>0){
//         this.setState({counter:this.state.counter - this.props.step})
//         }
//     }
//     increment = () =>{
//         this.setState({counter:this.state.counter + this.props.step})
//         }
//     render(){
//         return (<div className="counter">
//             <button onClick={this.decrement}>-</button>
//             <span>{this.state.counter}</span>
//             <button onClick={this.increment}>+</button>
//             </div>
//         )
//     }
// }


const Counter =props=> {
    const [counter,setCounter] = useState(props.initialValue);
    const increment = () =>{
       setCounter(counter + props.step)
        } 
        
    const decrement = () => {
        if(counter>0){
        setCounter(counter - props.step)
        }
    }

    return (<div className="counter">
            <button onClick={decrement}>-</button>
            <span>{counter}</span>
            <button onClick={increment}>+</button>
            </div>
        )
    
}

export default Counter;