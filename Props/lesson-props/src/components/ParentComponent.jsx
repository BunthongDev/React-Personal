// recieving props
import ChildComponent from './ChildComponent'
import React, {useState} from 'react'


const ParentComponent = () => {
  // const handleClick = () => {
  //   alert('Button clicked')
  // }

  // const [message, setMessage] = useState('')
  // const handleMessageChange = (newMessage) => {
  //   setMessage(newMessage);
  // }

  // return(
  //   <div className="p-4 bg-gray-100">
  //     <ChildComponent onMessageChange={handleMessageChange} />
  //     <p>{message}</p>
  //   </div>
  // )

  // return (
  //   <div className='p-4 bg-gray-100'>
  //     <ChildComponent onClick={handleClick} />
  //   </div>
  // )

  // return (
  //   <div>
  //      <div className="p-4 bg-gray-100">
  //           <ChildComponent name= "Haru" age= "25" job="Designer"/>

  //       </div>
  //   </div>
  // )

  const user = {name: 'Spider-Man', age: 30, job: 'Web Designer'}

  return(
    <div>
      <ChildComponent {...user} />
    </div>
  )


}

export default ParentComponent;



