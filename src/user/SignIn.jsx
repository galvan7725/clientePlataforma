import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../core/NavBar';
import SideBarDerecho from '../core/SideBarDerecho';

 class SignIn extends Component {
    
    render() {
        return (
            <>
                      <section className="full-box dashboard-contentPage">
                          <NavBar />

                          <div className="container-fluid">
                              <div className="full-box">
                                    <form action="home.html" method="" autocomplete="off" class="">
                                        <p class="text-center text-muted"><i class="zmdi zmdi-account-circle zmdi-hc-5x"></i></p>
                                        <p class="text-center text-muted text-uppercase">Inicia sesión con tu cuenta</p>
                                        <div class="form-group label-floating">
                                        <label class="control-label" for="UserEmail">E-mail</label>
                                        <input class="form-control" id="UserEmail" type="email" />
                                        <p class="help-block">Escribe tú E-mail</p>
                                        </div>
                                        <div class="form-group label-floating">
                                        <label class="control-label" for="UserPass">Contraseña</label>
                                        <input class="form-control" id="UserPass" type="text" />
                                        <p class="help-block">Escribe tú contraseña</p>
                                        </div>
                                        <div class="form-group text-center">
                                            <input type="submit" value="Iniciar sesión" class="btn btn-raised btn-danger" />
                                        </div>
                                    </form>
                              </div>
                            
                          </div>
                    </section>
                    <SideBarDerecho />

            </>
        )
    }
}


export default SignIn;