import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
const AuthLogin = () => {
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    );
};

export default AuthLogin;