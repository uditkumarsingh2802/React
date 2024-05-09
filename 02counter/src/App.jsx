import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] = useState(15)

  //let counter=15
  const addValue= () =>{
    if(counter<20){
    setCounter(counter+1)
    }
  }
  const RemoveValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <button
     onClick={RemoveValue}
     >RemoveValue {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
