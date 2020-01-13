import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';




 class SideBarDerecho extends Component {
    render() {
        const props = this.props;
        return (
            <>
                {/*  seccion de las notificaciones */}
<section className="full-box Notifications-area">
<div className="full-box Notifications-bg btn-Notifications-area"></div>
<div className="full-box Notifications-body">
    <div className="Notifications-body-title text-titles text-center">
        Notificaciones <i className="zmdi zmdi-close btn-Notifications-area"></i>
    </div>
    <div className="list-group">
          <div className="list-group-item">
            <div className="row-action-primary">
                  <i className="zmdi zmdi-alert-triangle"></i>
            </div>
            <div className="row-content">
                  <div className="least-content">1d</div>
                  <h4 className="list-group-item-heading">Tu cita se acerca</h4>
                  <p className="list-group-item-text">Tienes una cita programada para mañana</p>
            </div>
          </div>
          <div className="list-group-separator"></div>
          <div className="list-group-item">
            <div className="row-action-primary">
                  <i className="zmdi zmdi-alert-octagon"></i>
            </div>
            <div className="row-content">
                  <div className="least-content">3d</div>
                  <h4 className="list-group-item-heading">Solicitud aceptada</h4>
                  <p className="list-group-item-text">La solicitud para la aprobacion de tu cita fue aceptada</p>
            </div>
          </div>
          <div className="list-group-separator"></div>
        <div className="list-group-item">
            <div className="row-action-primary">
                  <i className="zmdi zmdi-help"></i>
            </div>
            <div className="row-content">
                  <div className="least-content">7d</div>
                  <h4 className="list-group-item-heading">Solicitud aceptada</h4>
                  <p className="list-group-item-text">La solicitud para la aprobacion de tu cita fue aceptada</p>
            </div>
        </div>
          <div className="list-group-separator"></div>
          <div className="list-group-item">
            <div className="row-action-primary">
                  <i className="zmdi zmdi-info"></i>
            </div>
            <div className="row-content">
                  <div className="least-content">8d</div>
                  <h4 className="list-group-item-heading">Solicitud aceptada</h4>
                  <p className="list-group-item-text">La solicitud para la aprobacion de tu cita fue aceptada</p>
            </div>
          </div>
    </div>

</div>
</section>
            </>
        )
    }
}



export default SideBarDerecho;