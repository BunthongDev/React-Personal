
import Counter from "./assets/components/Counter"
import DigitalClock from "./assets/components/DigitalClock"
import { useState } from "react"



function App() {

  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  
  }



  return (

    <div className="App">
      <Counter/>
      <h1 className="text-center mt-10">Digital Clock with Moon Phase Calculator</h1> 
      <DigitalClock />

      <div className="m-5">
        <h1 className=" font-bold text-indigo-600">{value}</h1>
        <input className="m-5 p-5 border-2 border-black" onChange={handleChange} value={value} type="text" placeholder="Typing..." />
        <button className="border-green-900 border-2 p-3 bg-fuchsia-600" onClick={() => setValue(" ")}>Clear</button>
      </div>
    </div>
  )
}

export default App
  