import React,{Component, useState, useEffect} from 'react';

// class Counter extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             counter:this.props.initialValue
//         }
//     }

//     componentWillUnmount(){
//         console.log('el componente se ha desmontado')
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

    useEffect(()=>{
        console.log('El counter se ha montado');
        return ()=>{
            console.log('El counter se ha desmontado')
        }
    },[])

    useEffect(()=>{
        console.log('El counter se ha actualizado')
    },)

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