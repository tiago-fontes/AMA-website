import Navbar from "../components/Navbar"

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-primary">Our Products</h1>
        <p className="text-gray-600 mt-4">Discover what we offer.</p>
      </div>
    </>
  )
}
