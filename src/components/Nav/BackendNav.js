import React from 'react'
import logo from '../../assets/Group.svg'
import './nav.scss';

const BackendNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled mb-5" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <img src={logo} alt="" />
                </a>
                <a className="navbar-brand navbrand-title d-none d-md-block" href="#page-top">
                    NATIONAL SOCIAL INVESTMENT MANAGEMENT SYSTEM
                </a>
           
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">                       
                        <li className="nav-item dropdown has-arrow main-drop show">
						<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
							<span className="user-img"><img src="https://lh3.googleusercontent.com/ogw/ADGmqu91ogTVTc4zNxXTd7Epgf676Ya8QFmPuweVjqzS=s64-c-mo " alt=""/>
							<span className="status online"></span></span>
							<span>User</span>
						</a>
						<div className="dropdown-menu " x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(-11px, 50px, 0px)'}}>
							<a className="dropdown-item" href="profile.html">My Profile</a>
							<a className="dropdown-item" href="settings.html">Settings</a>
							<a className="dropdown-item" href="login.html">Logout</a>
						</div>
					</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default BackendNav
