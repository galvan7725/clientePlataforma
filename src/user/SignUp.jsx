import React, { Component } from 'react'
import NavBar from '../core/NavBar';
import SideBarDerecho from '../core/SideBarDerecho';
import {singup, singin, authenticate} from '../auth';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import validator from 'validator';
import '../App.css';


class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name : "",
            email : "",
            password: "",
            error: "",
            redirectToRefer: false,
            loading:false,
            nav: false,
            styles: {
                div: {
                    marginTop: "30px"
                },
                fondo: {
                    backgroundColor: "#CDFDFF"
                },
                form: {
                    border: "2px solid black",
                    color: "black",
                    fontFamily: "'Indie Flower', cursive",
                    padding: "10px"
                },
            }
        }
    }

    componentDidMount = () => {
        $(".dashboard-contentPage").mCustomScrollbar({
            theme: "light-thin",
            scrollbarPosition: "inside",
            autoHideScrollbar: true,
            scrollButtons: { enable: false }
        });
    }

    handleChange = (name) => (event) =>{
        this.setState({error : ""});
        this.setState({[name] : event.target.value});
    }

    clickSubmit = event =>{
        event.preventDefault();

        const {name, email, password} = this.state;
        const user = {
            name,
            email,
            password
        };
        if(name == "" || email == "" || password ==""){
            //error
            this.setState({error:"Los tres campos son necesarios"})

        }else{
            if(!validator.isEmail(email) || !validator.isLength(password,{min:6,max:256})){
                if(!validator.isEmail(email)){
                    this.setState({error:"Se necesita un email valido"});

                }else{
                    this.setState({error:"La contraseña debe tener por lo menos 6 caracteres"});

                }
               
            }else{
                singup(user).then(data =>{
                    if(data.error){
                        this.setState({error: data.error});
                        
                    }else{
                       //cambiar la redireccion por el logeo automatico
                       const user = {
                        email,
                        password
                    };
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
                        //this.setState({redirectToRefer: true});
                          
                        this.setState({
                         error: "",
                         name: "",
                         email: "",
                         password: ""
                        });
                    }
                });



            }


        }
        
    };

    signUpForm = (name, email, password) => {
        return (
            <>
                <form >
                    <p className="text-center "><i className="zmdi zmdi-account-add zmdi-hc-5x"></i></p>
                    <p className="text-center  text-uppercase">Registrate en nuestra plataforma</p>
                    <div className="form-group label-floating">
                        <label className="control-label" >Nombre</label>
                        <input onChange={this.handleChange("name")} value={name} className="form-control" id="UserEmail" type="email" />
                        <p className="help-block">Escriba su nombre</p>
                    </div>
                    <div className="form-group label-floating">
                        <label className="control-label" >E-mail</label>
                        <input onChange={this.handleChange("email")} value={email} className="form-control"  type="email" />
                        <p className="help-block">Escribe tú contraseña</p>
                    </div>
                    <div className="form-group label-floating">
                        <label className="control-label" >Repite la contraseña</label>
                        <input  onChange={this.handleChange("password")} value={password} className="form-control"  type="password" />
                        <p className="help-block">Repite tú contraseña</p>
                    </div>
                    <div className="form-group text-center">
                        <button onClick={this.clickSubmit}  type="submit" value="Aceptar" className="btn btn-raised btn-primary" >Registrarse</button>
                    </div>
                </form>
            </>
        )
    }

    render() {

       
        const {name, email, password, error, redirectToRefer,styles,loading} = this.state;

        if(redirectToRefer){
            return <Redirect to="/principal" />
        }
        return (
            <>
                <section className="full-box dashboard-contentPage no-paddin-left">
                    <NavBar />

                    <div className="container-fluid">
                        <div className="row" style={styles.div}>
                            <div className="col-md-4" ></div>
                            <div className="col-md-4" style={styles.form}>
                            {loading ? <div className="text-center">
                                <div className="spinner">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                                </div> : ""}
                                {
                                    this.signUpForm(name, email, password)
                                }
                                { error != "" ? (<div className="alert alert-danger" role="alert">
                                            {`error : ${error}`}
                                        </div>):(<></>)}
                            </div>
                            <div className="col-md-4"></div>

                        </div>

                    </div>
                </section>
                <SideBarDerecho />
            </>
        )
    }
}

export default SignUp;