export default function Contact() {
  return (
    <div className="contact p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
      <form className="space-y-4">
        <label className="block">
          <span className="block text-sm font-medium text-gray-700">
            Your email:
          </span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-gray-700">
            Your message:
          </span>
          <textarea
            name="message"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
