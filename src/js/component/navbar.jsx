import React from "react";

const Navbar = () =>{
return (
  <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Star bootstrap</a>
  <button className="navbar-toggler text-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Service</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
)
}
  export default Navbar;