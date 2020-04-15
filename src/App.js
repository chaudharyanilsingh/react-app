import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/First';
import ClassComponent from './components/ClassComponent';
import { render } from '@testing-library/react';
import Statedemo from './components/Statedemo'
import UseStatedemo from './components/UseStatedemo';
function App() {
  render()
  {
  return (
    <div className="App">
     {
     

     <UseStatedemo />


     
     /*<Statedemo />

      <First name="anil"> 
     <button> click</button>
     <p> click here to </p>
     </First>
       <ClassComponent name="anil in class" /> */}
       </div>
  );
}
}
export default App;
