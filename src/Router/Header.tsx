import { NavLink } from "react-router-dom"


function Header() {
  return (
    <header className="bg-black text-white">
        <nav>
            <ul className="flex justify-around">
                <li><NavLink to={'/index'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header