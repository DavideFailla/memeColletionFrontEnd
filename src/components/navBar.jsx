import { Link, NavLink } from "react-router-dom";
import { getDuplicates, getMemes } from "../api";


export default function NavBar(){
  return (
    <>
      <nav id="nav-bar">
        <ul>
          <li>
            <NavLink
              to="/albums"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }
            >ALBUM</NavLink>
          </li>
          <li onClick={getDuplicates}>
            <NavLink
              to="/duplicates"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }
            >DUPLICATI</NavLink>
          </li>
          <li>
            <NavLink
              to="/pack"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }
            >SHOP</NavLink>
          </li>
          <li onClick={getMemes}>
            <NavLink
              to="/memes"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }
            >CARTE</NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }
            >CONTATTACI</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}