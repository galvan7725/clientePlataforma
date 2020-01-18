import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';


const NavBar = () =>{
    const styles ={
        nav : {
            marginLeft : "20px"
        },
        nav2: {
            marginLeft : "30px"
        }
    };
    return (
        <>
        <nav className="full-box dashboard-Navbar">
			<ul className="full-box list-unstyled text-right">
                { true && (
				<li className="pull-left">
					<a href="#!" className="btn-menu-dashboard"><i className="zmdi zmdi-more-vert"></i></a>
				</li>
                )}
                <li className="pull-left">
					<Link to="/" className="nav-link"><i className="zmdi zmdi-home">Inicio</i> </Link>
                    
				</li>
                <li className="pull-left" style={styles.nav}>
					<Link to="/signin" className="nav-link"><i className="zmdi zmdi-power">Acceso</i> </Link>
                    
				</li>
                <li className="pull-left" style={styles.nav2}>
					<a href="#!" className="nav-link"><i className="zmdi zmdi-account-add">Registro</i> </a>
                    
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