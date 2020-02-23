import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import image404 from '../images/error404.png';

 class NotFound extends Component {
    render() {
        return (
            <>
            <div className="row">
                <div className="container-fluid">
                    <div className="col-md-12 text-center">
                        <h1>Error 404</h1>
                        <h3>La url no existe</h3>
                        <Link className="h2" to="/" >Ir al inicio</Link>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="container-fluid">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={image404} style={{width:"100%"}} alt="404"/>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            </>
        )
    }
}

export default NotFound;