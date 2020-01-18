import React ,{Component} from 'react'
import '../App.css';
import NavBar from './NavBar';
import SideBarDerecho from "./SideBarDerecho";
import Box from './Box';
import $ from 'jquery';



class  Home extends Component {

    
    componentDidMount() {
        var body=$('.dashboard-contentPage');
        var sidebar=$('.dashboard-sideBar');
        //body.addClass('no-paddin-left');
        //sidebar.addClass('hide-sidebar').removeClass('show-sidebar');

        if(body.hasClass('no-paddin-left')){
            sidebar.removeClass('hide-sidebar').addClass('show-sidebar');

        }else{
            sidebar.addClass('hide-sidebar').removeClass('show-sidebar');


        }
        
        $('.btn-menu-dashboard').on('click', function(){
           
            if(sidebar.css('pointer-events')=='none'){
                body.removeClass('no-paddin-left');
                sidebar.removeClass('hide-sidebar').addClass('show-sidebar');
            }else{
                body.addClass('no-paddin-left');
                sidebar.addClass('hide-sidebar').removeClass('show-sidebar');
            }
        });
        
    }

   
    
    render() {
        return (
             
        
    
    <>
        {/*seccion del contenido */}
        <section id="prueba33" className="full-box dashboard-contentPage">

		{ /*aqui va el navbar */}
        <NavBar />
		<div className="container-fluid">
			<div className="page-header">
			  <h1 className="text-titles">Hospital Santiago<small></small></h1>
			</div>
		    </div>
		    <div className="full-box text-center" style={{padding: "30px 10px"}}>
			<article className="full-box tile">
				<div className="full-box tile-title text-center text-titles text-uppercase">
					Especialistas
				</div>
				<div className="full-box tile-icon text-center">
					<i className="zmdi zmdi-account"></i>
				</div>
				<div className="full-box tile-number text-titles">
					<p className="full-box">7</p>
					<small>Especilistas</small>
				</div>
			    </article>
			    <article className="full-box tile">
				<div className="full-box tile-title text-center text-titles text-uppercase">
					Med. General
				</div>
				<div className="full-box tile-icon text-center">
					<i className="zmdi zmdi-male-alt"></i>
				</div>
				<div className="full-box tile-number text-titles">
					<p className="full-box">10</p>
					<small>Medicos</small>
				</div>
			</article>
			<article className="full-box tile">
				<div className="full-box tile-title text-center text-titles text-uppercase">
					Personal
				</div>
				<div className="full-box tile-icon text-center">
					<i className="zmdi zmdi-face"></i>
				</div>
				<div className="full-box tile-number text-titles">
					<p className="full-box">70</p>
					<small>Miembros</small>
				</div>
			</article>
			<article className="full-box tile">
				<div className="full-box tile-title text-center text-titles text-uppercase">
					Citas
				</div>
				<div className="full-box tile-icon text-center">
					<i className="zmdi zmdi-male-female"></i>
				</div>
				<div className="full-box tile-number text-titles">
					<p className="full-box">70</p>
					<small>Atenciones semanales</small>
				</div>
			</article>
		</div>
        </section>

    <SideBarDerecho />
    </>
)
        }
    }
    

export default Home;