import React from 'react'
import images from '../images/bandwagonLogo-removebg-preview.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img src={images} alt ="Loading" width = {200}/>
          </a>
            <span className="navbar-text fs-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active text-light" to="addproduct">Sell</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active text-light" to="about">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active text-light" to="contacts">Contacts</Link>
                  </li>
                </ul>
            </span>
          </div>
        </nav>
    </div>
  )
}
