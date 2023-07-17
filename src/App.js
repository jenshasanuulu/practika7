import { useState } from 'react';
import './App.css';
import Buttun from './Buttun';
import { styled } from 'styled-components'

function App() {

const[state,setState]=useState(0)
function plus(){
  setState(1+state)
}
function minus(){
  if(state>0){
    setState(state-1)
  }
else{
  
}
}
  return (
    <div>
  <Buttun onClick={plus} width="200px" text="+"></Buttun>
  <Buttun  onClick={minus} width="300px" text="-"></Buttun>
  {/* <Buttun width="300px" back="blue" text="add"></Buttun>
  <Buttun style="600px" text="click"></Buttun>
  <Buttun style="500px" text="close"></Buttun> */}


  {/* <button onClick={plus}>+</button> */}
  <h1>{state} </h1>
  {/* <button onClick={minus}>-</button> */}

  </div>
  );
}

export default App;
