import React from 'react'
import { useState } from 'react';

export default function SearchBar({onSubmit}) {
  const [term, setTerm] = useState(''); // this is how we can create a state variable 

  const hnadleFormSubmit = (event) => {
  event.preventDefault();

  onSubmit(term); // this is how we can pass the value of the state variable to the parent component

}

const handleChange = (event) => {
  setTerm(event.target.value); // this is how we can update the value of the state variable

}


  return (
    <div>
      <form onSubmit = {hnadleFormSubmit}>
        <input type="text"value={term} onChange={handleChange}  />
      </form>
    </div>
  )
}
