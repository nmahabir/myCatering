import React from "react";

// const Nav = () => (
//   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//     <a className="navbar-brand" href="/">
//       My Catering
//     </a>

//   </nav>
// );
const Nav = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a className="nav-link active" href="#">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" href="#">
        My Catering
      </a>
    </li>
    <li className="nav-item dropdown justify-content-right">
      <a
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Menu
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          About your Cook!
        </a>
        <a className="dropdown-item" href="#">
          Place Order
        </a>
        <a className="dropdown-item" href="#">
          Specials
        </a>
        <a className="dropdown-item" href="#">
          Recipes
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">
          All Dishes
        </a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Link
      </a>
    </li>
  </ul>
);

export default Nav;