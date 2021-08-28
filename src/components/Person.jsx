import React from 'react';

const Person = props => {
    return <div>Nombre: {props.name}, Apellido: {props.surname}, edad: {props.age}.</div>;
  }

// class Person extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return<div>Nombre: {this.props.name}, Apellido: {this.props.surname}, edad: {this.props.age}.</div>;
//     }
// }


export default Person;