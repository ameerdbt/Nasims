import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row justify-content-between">
          <div className="my-2 text-center col-12 col-md-4">
            &copy; { new Date().getFullYear() } NASIMS. All rights reserved
          </div>
          <div className="my-2 text-center col-12 col-md-4">
            <a href="/apply">Apply</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="my-2 text-center col-12 col-md-2">
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer