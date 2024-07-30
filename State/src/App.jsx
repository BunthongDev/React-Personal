
import { useState } from 'react'
import { sculptureList } from './data.jsx'

export default function App() {

  // index = start the value from 0, setIndex = function to change the value
  const [index, setIndex] = useState(0)

  // function for handle click
  function handleClick() {
    setIndex(index + 1)
  }

  let sculpture = sculptureList[index];


  // red button click (Cheking it on inspect console to see event was clicked)
  const handleBtnClick = () => {
    console.log("Red Btn was clicked!! ")
  }

  return (
    <>
    <div className='mx-10 mt-10 w-[430px]'>
      <button onClick={handleClick} className='rounded-md border-black border-[2px] bg-green-500 p-2 text-white'>
        Click here
      </button>
      <h2 className='my-2 font-bold'>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img className='rounded-md border-black border-[2px] mt-2'
        src={sculpture.url} 
        alt={sculpture.alt}
      />    
      <p className='mt-2 w-[300px]'>
        {sculpture.description}
      </p>

    </div>
      <button onClick={handleBtnClick} className='rounded-md border-black border-[2px] bg-red-500 p-2 text-white mx-10 mt-10'>
          Click me!!
      </button>
  </>
  

  )
}
