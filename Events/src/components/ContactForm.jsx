import { useState } from 'react';

const ContactForm = () => {
  // Step 2: Create state variables to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Step 3: Define event handler functions
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-gray-200 rounded-lg shadow-lg">
      {submitted ? (
        <div className="text-center">
          <h2>Thank You for Submitting!</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
