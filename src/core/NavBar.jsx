import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';


const NavBar = () =>{
    return (
        <>
        <nav className="full-box dashboard-Navbar">
			<ul className="full-box list-unstyled text-right">
				<li className="pull-left">
					<a href="#!" className="btn-menu-dashboard"><i className="zmdi zmdi-more-vert"></i></a>
				</li>
				<li>
					<a href="#!" className="btn-Notifications-area">
						<i className="zmdi zmdi-notifications-none"></i>
						<span className="badge">4</span>
					</a>
				</li>
				<li>
					<a href="#!" className="btn-search">
						<i className="zmdi zmdi-search"></i>
					</a>
				</li>
				<li>
					<a href="#!" className="btn-modal-help">
						<i className="zmdi zmdi-help-outline"></i>
					</a>
				</li>
			</ul>
		</nav>
        </>
    )
}


export default NavBar;