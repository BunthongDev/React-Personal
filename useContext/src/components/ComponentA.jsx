import { useState } from "react"
import ComponentB from "./ComponentB"


export default function ComponentA() {
  const [user, setUser] = useState("React")
  return (

    <div className="Box border-solid border-2 border-black p-4 m-4">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <ComponentB/>

      

      {/* another example of useContext() */}


    </div>
  )
}
