import { NavLink } from "react-router-dom";
import { getDuplicates } from "../api";

export default function NavBar(){
  return (
    <>
      <nav>
          <NavLink
              to="/home"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }
            ><img src="" alt="logo" />
            </NavLink>
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
        <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }
            >LOGOUT</NavLink>
      </nav>
    </>
  );
}