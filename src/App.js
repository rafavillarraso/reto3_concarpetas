import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UserForm from './components/UserForm'


// const Saluda = props => {
//   console.log(props)
//   return <h3>Hola soy {props.name}, tengo {props.edad} años</h3>;

// }


//  (Lo mismo que antes pero con clases:)
//
//  class Saluda extends React.Component {
//     constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this.props)
//     return <h3>Hola soy {this.props.name}, tengo {this.props.edad} años</h3>;
//   }
 
// }


function App() {
  const [showCounters,setShowCounters]=useState(true)
  const quitarCounters =()=> setShowCounters(false)
  return (
    <div className="App">
      <header className="App-header">
        <UserForm />
        {/* {showCounters && <React.Fragment>
          <Counter initialValue={10} step={2}/>
          <Counter initialValue={5} step={5}/>
        </React.Fragment>
        }
        <button onClick={quitarCounters}>Quitar counter</button> */}
      </header>
    </div>
  );
}

export default App;
