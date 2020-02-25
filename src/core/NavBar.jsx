import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import {singout, isAuthenticated} from '../auth';
import logo from '../logo.svg';
import '../App.css';


const NavBar = () =>{
    const styles ={
        nav : {
            marginLeft : "20px"
        },
        nav2: {
            marginLeft : "30px"
		},
		font: {fontFamily : "'Indie Flower', cursive"}
	};
	
    return (
        <>
        <nav className="full-box dashboard-Navbar" style={styles.font}>
			<ul className="full-box list-unstyled text-right">
                { isAuthenticated() ? (
					<>
				<li className="pull-left">
					<a href="#!" className="btn-menu-dashboard"><i className="zmdi zmdi-more-vert"></i></a>
				</li>
				<li className="pull-left" style={styles.nav,{width:"auto"}}>
					<span  >Plataforma Master </span>
				</li>
				<li className="pull-left">
					<img src={logo} alt="logo"/>
				</li>
				</>
                ) : (
					<>
					<li className="pull-left">
					<Link to="/" className="nav-link"><i className="zmdi zmdi-home"></i> </Link>
                    
				</li>
                <li className="pull-left" style={styles.nav}>
					<Link to="/signin" className="nav-link"><i className="zmdi zmdi-power"><span style={styles.font}>Acceso</span></i> </Link>
                    
				</li>
                <li className="pull-left" style={styles.nav2}>
					<Link  to="/signup" className="nav-link"><i className="zmdi zmdi-account-add"><span style={styles.font}>Registro</span></i> </Link>
                    
				</li>
					</>

				)}

                
				{ isAuthenticated() ? (
					<>
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
				</>
				) : (
				<>
				
				</>
				)}
			</ul>
		</nav>
        </>
    )
}


export default NavBar;