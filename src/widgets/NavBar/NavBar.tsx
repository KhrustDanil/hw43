import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="p-4">
      <ul className="flex ml-80">
        <li className="ml-40 font-bold text-2xl hover:text-teal-300"><Link to="/">Головна</Link></li>
        <li className="ml-40 font-bold text-2xl hover:text-teal-300"><Link to="/albums">Альбоми</Link></li>
        <li className="ml-40 font-bold text-2xl hover:text-teal-300"><Link to="/about">Про проект</Link></li>
        <li className="ml-40 font-bold text-2xl hover:text-teal-300"><Link to="/notes">Нотатки</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
