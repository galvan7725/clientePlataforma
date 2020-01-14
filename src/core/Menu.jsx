import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';

const Menu = ()=>(
    <>
        { true && (
        <section id="prueba2" className="full-box cover dashboard-sideBar hide-sidebar">
		<div className="full-box dashboard-sideBar-bg btn-menu-dashboard"></div>
		<div className="full-box dashboard-sideBar-ct">
			
			<div className="full-box text-uppercase text-center text-titles dashboard-sideBar-title">
				Hospital Santiago <i className="zmdi zmdi-close btn-menu-dashboard visible-xs"></i>
			</div>
			<div className="full-box dashboard-sideBar-UserInfo">
				<figure className="full-box">
					<img src="./assets/img/us1.png" alt="UserIcon"/>
					<figcaption className="text-center text-titles">Nombre de usuario</figcaption>
				</figure>
				<ul className="full-box list-unstyled text-center">
					<li>
						<a href="#!">
							<i className="zmdi zmdi-settings"></i>
						</a>
					</li>
					<li>
						<a href="#!" className="btn-exit-system">
							<i className="zmdi zmdi-power"></i>
						</a>
					</li>
				</ul>
			</div>
			<ul className="list-unstyled full-box dashboard-sideBar-Menu">
				<li>
					<a href="home.html">
						<i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i> Inicio
					</a>
				</li>
				<li>
					<a href="#!" className="btn-sideBar-SubMenu">
						<i className="zmdi zmdi-case zmdi-hc-fw"></i> Citas <i className="zmdi zmdi-caret-down pull-right"></i>
					</a>
					<ul className="list-unstyled full-box">
						<li>
							<a href="period.html"><i className="zmdi zmdi-timer zmdi-hc-fw"></i> Historial</a>
						</li>
						<li>
							<a href="subject.html"><i className="zmdi zmdi-book zmdi-hc-fw"></i> Nueva</a>
						</li>
						
					</ul>
				</li>
				<li>
					<a href="#!" className="btn-sideBar-SubMenu">
						<i className="zmdi zmdi-account-add zmdi-hc-fw"></i> Usuario <i className="zmdi zmdi-caret-down pull-right"></i>
					</a>
					<ul className="list-unstyled full-box">
						<li>
							<a href="admin.html"><i className="zmdi zmdi-account zmdi-hc-fw"></i> Historial</a>
						</li>
						
						
					</ul>
				</li>
				<li>
					<a href="#!" className="btn-sideBar-SubMenu">
						<i className="zmdi zmdi-card zmdi-hc-fw"></i> Pagos <i className="zmdi zmdi-caret-down pull-right"></i>
					</a>
					<ul className="list-unstyled full-box">
						
						<li>
							<a href="payments.html"><i className="zmdi zmdi-money zmdi-hc-fw"></i> Pagos</a>
						</li>
					</ul>
				</li>
				
			</ul>
		</div>
	</section>
        )}
    

    
    </>
)


export default withRouter(Menu);