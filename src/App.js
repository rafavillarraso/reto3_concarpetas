import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './components/Person.jsx'
import Counter from './components/Counter'

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
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialValue={10} step={2}/>
        <Counter initialValue={5} step={5}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
