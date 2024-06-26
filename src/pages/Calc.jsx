import { useState } from 'react';

export default function Add(e) {
 const [result,setResult] = useState(0);
  const [input1,setInput1] = useState(0);
  const[input2,setInput2] = useState(0);
  function handleAdd(){
    let sumy = Number(input1) +Number(input2);
    setResult(sumy);
  }
    function handleMinus(){
    let sumy = Number(input1) - Number(input2);
    setResult(sumy);
  }
  function handleMul()
  {
    let sumy = Number(input1) * Number(input2);
    setResult(sumy);
  }
  function handleDiv()
  {
    try{
    let sumy = Number(input1)/Number(input2);
    setResult(sumy);
    }
    catch{
      alert("It is not posssible maamma!");
    }
  }
function inputOne(e){
  setInput1(e.target.value);
}
  function inputTwo(e)
  {
   setInput2(e.target.value); 
  }
  function resetAll()
  {
    setResult(0);
  }
  return (
    <div>
    <input type="number" onChange={inputOne} placeholder="Enter no1"/>
      <br></br>
      <input type="number" onChange={inputTwo} placeholder="Enter no2"/>
      <br></br>
      <button type="button" onClick={handleAdd}>+</button>
      <button type="button" onClick={handleMinus}>-</button>
      <button type="button" onClick={handleMul}>X</button>
      <button type="button" onClick={handleDiv}>Div</button>
      <button type="button" onClick={resetAll}>Reset</button>
      <p>Your Sum is = {result}</p>
      </div>
  );
}
