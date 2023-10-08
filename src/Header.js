import React from "react";

function Header() {
  return (
    <div class="header">
      <img src="../logo-image.png" alt="" className="logo-img" />
      <h1>My Learning Journal</h1>
      <div class="link">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="About me.html" target="_blank">
              About Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
