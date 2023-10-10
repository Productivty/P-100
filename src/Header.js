import React from "react";

function Header() {
  return (
    <div className="header">
      <h1 className="logo-title">Pradeep Thapa</h1>
      <div className="link">
        <ul>
          <li>
            <a href="index.html#intro">Home</a>
          </li>
          <li>
            <a href="index.html#projects">Project</a>
          </li>
          <li>
            <a href="index.html#blogs">Blogs</a>
          </li>
          <li>
            <a href="index.html#about-me">About me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
