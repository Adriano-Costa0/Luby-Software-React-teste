import React from "react";
import { Link} from "react-router-dom";
import { NavBar } from "./styles";
import { FiHome, FiGithub, FiUsers } from "react-icons/fi";

export function BottomNavBar() {
  return (
    <NavBar>
      <ul>
        <li>
          <Link to="/home">
            <FiHome size={20}  />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/repos">
            <FiGithub size={20} />
            <span>Repos</span>
          </Link>
        </li>
        <li>
          <Link to="/follower">
            <FiUsers size={20} />
            <span>Seguidores</span>
          </Link>
        </li>
        <li>
          <Link to="/following">
            <FiUsers size={20} />
            <span>Seguindo</span>
          </Link>
        </li>
      </ul>
    </NavBar>
  );
}
