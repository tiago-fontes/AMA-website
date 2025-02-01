import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/AMA_logo.png" alt="AMA Logo" width={100} height={50} />
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-300">
            Our Products
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
