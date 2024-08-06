import React, { useState, useEffect } from 'react'



function Counter () {
    const [count, setCount] = useState(0);
    function addCount() {
        setCount(add => add + 1);
    }
  return (
    <div className='p-10 bg-gray-200 m-10 rounded-lg shadow-lg'>
        <p className='text-2xl font-bold'>Counter: {count} </p>
        <button className='m-3 p-4 bg-fuchsia-400 rounded-lg' onClick={addCount}>Add</button>
    </div>
  )
}

export default Counter
 