import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#222", color: "white" }}>
      <span style={{ fontWeight: "bold" }}>Sayali Balasaheb Vyavahare</span>
      <div style={{ float: "right" }}>
        <Link style={{ color: "white", marginRight: "15px" }} to="/">
          Home
        </Link>
        <Link style={{ color: "white", marginRight: "15px" }} to="/about">
          About Me
        </Link>
        <Link style={{ color: "white", marginRight: "15px" }} to="/projects">
          Projects
        </Link>
        <Link style={{ color: "white" }} to="/skills">
          Skills
        </Link>
      </div>
    </nav>
  );
};

export default Header;
