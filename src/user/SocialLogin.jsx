import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { socialLogin, authenticate } from "../auth";
 
class SocialLogin extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false
        };
    }

    responseGoogle = response => {
        console.log(response);
        const { googleId, name, email, imageUrl } = response.profileObj;
        const user = {
            password: googleId,
            name: name,
            email: email,
            imageUrl: imageUrl
        };
        // console.log("user obj to social login: ", user);
        socialLogin(user).then(data => {
            console.log("signin data: ", data);
            if (data.error) {
                console.log("Error Login. Please try again..");
            } else {
                console.log("signin success - setting jwt: ", data);
                authenticate(data, () => {
                    this.setState({ redirectToReferrer: true });
                });
            }
        });
    };
 
    render() {
                // redirect
                const { redirectToReferrer } = this.state;
                if (redirectToReferrer) {
                    return <Redirect to="/principal" />;
                }
        
        return (
                <>
                <GoogleLogin
                    clientId="409813154509-qc5bbv5mhk0on0ejqul23a57ihjlrtk9.apps.googleusercontent.com"
                    buttonText="Ingresar con Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    style={{marginBottom:"20px"}}
                />
                </>
                
        );
    }
}
 
export default SocialLogin;