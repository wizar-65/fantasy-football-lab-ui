import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="bg-purple-600 p-4 shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
      <div className="flex flex-row justify-between">
        <Link to={"/"}>
          <div>
            <p className="text-xl text-white">Fantasy Football-inator 9000</p>
          </div>
        </Link>
        <div className="flex flex-row text-white space-x-3">
          <Link className="hover:text-gray-300" to={"/"}>
            Home
          </Link>
          <Link className="hover:text-gray-300 " to={"/stats"}>
            Stats
          </Link>
          <Link className="hover:text-gray-300" to={"/scores"}>
            Scores
          </Link>
          <Link className="hover:text-gray-300" to={"/trade-inator"}>
            Trade-Inator™
          </Link>
          <Link className="hover:text-gray-300 " to={"/rankings"}>
            Rankings
          </Link>
        </div>
      </div>
    </nav>
  )
}
