import { Link } from "react-router-dom"
import { FiUser } from "react-icons/fi";

function Navbar() {
  return (
   <nav className="flex justify-between items-center py-5">
     <h2 className="text-red-500 font-bold text-xl">Dev Cluster</h2>
     <Link to="signUp" className="border-2 px-12 py-1 flex gap-3 text-gray-600 items-center rounded-md"><FiUser /> <span>username@dev-cluster.com</span></Link>
   </nav>
  )
}

export default Navbar
