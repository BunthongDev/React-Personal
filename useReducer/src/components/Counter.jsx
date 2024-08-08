import { useReducer } from 'react';

// Define the initial state
const initialState = { count: 0 };

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'set':
      return { count: action.payload };
    default:
      throw new Error('Unknown action type');
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-5">Counter: {state.count}</h2>
      <div className="space-x-3">
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement' })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: 'reset' })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: 'set', payload: 10 })}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
        >
          Set to 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
