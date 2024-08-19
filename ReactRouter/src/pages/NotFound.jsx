import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="not-found text-center p-10 bg-red-50 rounded-lg shadow-md max-w-lg mx-auto space-y-6">
  <h2 className="text-4xl font-bold text-red-600">Page Not Found!</h2>
  <p className="text-gray-700 text-lg">
    We're sorry, but the page you're looking for doesn't seem to exist. It might have been moved, or the URL might be incorrect. Please check the address and try again.
  </p>
  <p className="text-blue-500 text-lg">
    Go to the <Link to="/" className="underline hover:text-blue-700">Homepage</Link>.
  </p>
</div>

  )
}
