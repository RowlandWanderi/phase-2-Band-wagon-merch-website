import React from 'react'
import images from '../images/bandwagonLogo-removebg-preview.png'

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
                    <a className="nav-link active text-light" aria-current="page" href="">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active text-light" href="">About us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active text-light" href="">Contacts</a>
                  </li>
                </ul>
            </span>
          </div>
        </nav>
    </div>
  )
}
