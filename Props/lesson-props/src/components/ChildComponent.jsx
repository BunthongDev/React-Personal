//--- passing props ---

// import React from 'react'

// const ChildComponent = (props) => {
//   return (
//     <>
//     <div className="p-4 bg-white shadow-md mb-2">
//       <p className="text-lg">Hello, {props.name}!</p>
//     </div>
//     <div className="p-4 bg-white shadow-md mb-2">
//       <p className="text-lg">Age, {props.age}!</p>
//     </div>
    
    
//     </>
//   )
// }

// export default ChildComponent



// --- destructuring props ---
// import React from 'react'

// const ChildComponent = ({name, age, job}) => {
//   return (
//     <>
//     <div className="p-4 bg-white shadow-md mb-2">
//         <p className="text-lg">Hello, {name}. He is {age} </p>
//     </div>
//     <div className="p-4 bg-white shadow-md">
//         <p className="text-lg"> I am a {job} </p>
//     </div>
    
//     </>
//   )
// }

// export default ChildComponent


// --- type checking with PropTypes ---
// import React from 'react'
// import PropTypes from 'prop-types'

// const ChildComponent = ({name, age, job}) => {
//       return (
//         <>
//         <div className="p-4 bg-white shadow-md mb-2">
//             <p className="text-lg">Hello, {name}. He is {age} </p>
//         </div>
//         <div className="p-4 bg-white shadow-md">
//             <p className="text-lg"> I am a {job} </p>
//         </div>
        
//         </>
//       )
//     }

//     ChildComponent.propTypes = {
//         name: PropTypes.string.isRequired,
//         age: PropTypes.number.isRequired, 
//         job: PropTypes.string.isRequired
//         }


// export default ChildComponent



// --- default props ---

// import React from 'react';
// import PropTypes from 'prop-types';

// const ChildComponent = ({ name }) => {
//   return (
//     <div className="p-4 bg-white shadow-md rounded-e-xl">
//       <p className="text-lg">Hello, {name}!</p>
//     </div>
//   );
// };

// ChildComponent.defaultProps = {
//   name: 'Guest',
// };

// ChildComponent.propTypes = {
//   name: PropTypes.string.isRequired,
// };

// export default ChildComponent;


// --- event handler ---
// import React from 'react'

// const ChildComponent = ({onClick}) => {
//   return (
//     <div className="p-4 bg-white shadow-md">
//       <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClick}>
//         Click Me
//       </button>
//     </div>
//   )
// }

// export default ChildComponent






// --- callback function ---
// import React from 'react'

// const ChildComponent = ({onMessageChange}) => {
//   return (
//     <div className="p-4 bg-white shadow-md">
//       <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => onMessageChange('Hello from Child!')}>
//         Send Message
//       </button>
//     </div>

//   )
// }

// export default ChildComponent




// --- spread operator ---

import React from 'react'

const ChildComponent = ({name, age, job}) => {
  return (
    <div className="p-4 bg-white shadow-md">
    <p className="text-lg">Name: {name}</p>
    <p className="text-lg">Age: {age}</p>
    <p className="text-lg">Job: {job}</p>

  </div>
  )
}

export default ChildComponent

