import React, { Component } from 'react'
import NavBar from '../core/NavBar';
import SideBarDerecho from "../core/SideBarDerecho";
import Menu from "../core/Menu";
import $ from 'jquery';
import Posts from '../posts/Posts';



 class Principal extends Component {




    componentDidMount = () =>{
        var body=$('.dashboard-contentPage');
        var sidebar=$('.dashboard-sideBar');
        body.addClass('no-paddin-left');

        sidebar.addClass('hide-sidebar').removeClass('show-sidebar');




        $('.btn-menu-dashboard').on('click', function(){
           
            if(sidebar.css('pointer-events')=='none'){
                body.removeClass('no-paddin-left');
                sidebar.removeClass('hide-sidebar').addClass('show-sidebar');
            }else{
                body.addClass('no-paddin-left');
                sidebar.addClass('hide-sidebar').removeClass('show-sidebar');
            }
        });

      

        $(".dashboard-sideBar-ct").mCustomScrollbar({
        	theme:"light-thin",
        	scrollbarPosition: "inside",
        	autoHideScrollbar: true,
        	scrollButtons: {enable: false}
        });
        $(".dashboard-contentPage, .Notifications-body").mCustomScrollbar({
        	theme:"dark-thin",
        	scrollbarPosition: "inside",
        	autoHideScrollbar: true,
        	scrollButtons: {enable: false}
        });


    }

    render() {
        const styles = {
			font: {fontFamily : "'Indie Flower', cursive"}
		}

        return (
            <>
                <Menu />
                <section className="full-box dashboard-contentPage no-paddin-left">
                          <NavBar />

                          <div className="container-fluid">
                              <div className="row" style={styles.div}>
                               
                                    <Posts />
                              </div>
                            
                          </div>
                    </section>
                    <SideBarDerecho/>           
            </>
        )
    }
}


export default Principal;