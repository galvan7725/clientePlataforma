import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../core/NavBar';
import SideBarDerecho from '../core/SideBarDerecho';
import $ from 'jquery';
import SocialLogin from './SocialLogin';
import logo from '../logo.svg';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {singin, authenticate} from '../auth';
import { Link, Redirect } from "react-router-dom";
import '../App.css';



 class SignIn extends Component {

    constructor(){
        super();
        this.state = {
            nav:false,
            email : "",
            password: "",
            error: "",
            redirectToRefer: false,
            loading: false,
            styles:{
                div: {
                    marginTop: "30px"
                },
                form:{
                    border :"2px solid black",
                    color: "black",
                    fontFamily: "'Indie Flower', cursive",
                    padding:"10px"
                },
                font:{
                    fontFamily: "'Indie Flower', cursive"

                }
            }
        }
    }

    componentDidMount() {
        var body=$('.dashboard-contentPage');
        var sidebar=$('.dashboard-sideBar');
        body.addClass('no-paddin-left');
        sidebar.addClass('hide-sidebar').removeClass('show-sidebar');
        /*
        if(body.hasClass('no-paddin-left')){
            console.log(true);
            sidebar.removeClass('hide-sidebar').addClass('show-sidebar');
            console.log(false);
        }else{
            sidebar.addClass('hide-sidebar').removeClass('show-sidebar');
        }
        */
        $(".dashboard-contentPage").mCustomScrollbar({
            theme:"light-thin",
            scrollbarPosition: "inside",
            autoHideScrollbar: true,
            scrollButtons: {enable: false}
            });
        
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

    handleChange = (name) => (event) =>{
        this.setState({error : ""});
        this.setState({[name] : event.target.value});
    }

    clickSubmit = event =>{
        event.preventDefault();
        //this.setState({loading: true});
        const {email, password} = this.state;
        console.log(this.state);
        const user = {
            email,
            password
        };
        if( email.trim() == "" || password.trim() ==""){
            this.setState({loading: false});
            this.setState({error:"Error, los dos campos son necesarios"});
        }else{
            //init alert
        const MySwal = withReactContent(Swal)

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-outline-success',
              cancelButton: 'btn btn-outline-danger'
            },
            buttonsStyling: true,
          });
          
                //Realizar la consulta
                singin(user).then( data =>{
                    //alert(data);
                    if(data === undefined){
                        //alert error

                    }else{

                        if(!data.error){
                            this.setState({error: data.error,loading: false});
                            //success

                                //Authenticate the user
                             authenticate(data, () =>{
                                 this.setState({redirectToRefer: true});
                             });
                            //Redirect to another page
    
                            this.setState({
                             error: "",
                             email: "",
                             password: ""
                            });
                        }else{
                            this.setState({error: data.error});
                            
                              
                             console.log(data.error);
                             
                        }
                    }
                    
                    
                }); 
//end alert
        }
        
    };

    signInForm = (email, password)=>(
                                    <form>
                                        <p className="text-center text-muted"><i className="zmdi zmdi-account-circle zmdi-hc-5x"></i></p>
                                        <p className="text-center text-muted text-uppercase">Inicia sesión con tu cuenta</p>
                                        <div className="form-group label-floating">
                                        <label className="control-label" >E-mail</label>
                                        <input className="form-control" id="UserEmail" onChange={this.handleChange("email")} type="email" required value={email} />
                                        <p className="help-block">Escribe tú E-mail</p>
                                        </div>
                                        <div className="form-group label-floating">
                                        <label className="control-label">Contraseña</label>
                                        <input className="form-control" id="UserPass" onChange={this.handleChange("password")} type="password" required value={password}/>
                                        <p className="help-block">Escribe tú contraseña</p>
                                        </div>
                                        <div className="form-group text-center">
                                            <button type="submit" onClick={this.clickSubmit}  className="btn btn-raised btn-success" >Acceder</button>
                                            
                                        </div>
                                        
                                    </form>
    )

    
    
    
    render() {

        const styles = this.state.styles;
       const  {nav} = this.state;
       const { email, password, redirectToRefer, loading, error} = this.state;
        if(redirectToRefer){
            return <Redirect to="/principal" />
        }

        return (
            <>
                      <section className="full-box dashboard-contentPage no-paddin-left">
                          <NavBar />

                          <div className="container-fluid">
                              <div className="row" style={styles.div}>
                                  <div className="col-md-4"></div>
                              <div className="col-md-4" style={styles.form}>
                              {loading ? <div className="text-center">
                                <div className="spinner">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                                </div> : ""}
                                    {this.signInForm(email,password)}

                                       { error != "" ? (<div className="alert alert-danger" role="alert">
                                            {`error : ${error}`}
                                        </div>):(<></>)}

                                    <div className="row">
                                        <div className="container-fluid">
                                            <div className="col-md-12 text-center">
                                                <h2 style={styles.font}>Ingresa con tu cuenta de Google</h2>
                                                <SocialLogin />
                                            </div>
                                        </div>
                                    </div>
                              </div>
                              <div className="col-md-4"></div>

                              </div>
                            
                          </div>
                    </section>
                    { nav ? (<SideBarDerecho/>) :(<></>)}

            </>
        )
    }
}


export default SignIn;