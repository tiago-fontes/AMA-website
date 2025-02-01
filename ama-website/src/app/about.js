import Navbar from "../components/Navbar"

export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-primary">About Us</h1>
        <p className="text-gray-600 mt-4">
          We are a team dedicated to innovation.
        </p>
      </div>
    </>
  )
}
