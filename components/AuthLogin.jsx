import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
const AuthLogin = () => {
const router = useRouter()
const successLogin = credentialResponse =>{
    //post to server
    //get token
    const token = "dkuhkjsdfghb"
    const cookieStore = new Cookies(null,{path:"/"})
    cookieStore.set("logintoken",token)
    router.push("/userpanel")
    const userInfo = jwtDecode(credentialResponse.credential)
    console.log(userInfo);
    
}

const catchLogin = ()=>{
    console.log("login failed");
}

    return (
        <GoogleLogin
            onSuccess={successLogin}
            onError={catchLogin}
        />
    );
};

export default AuthLogin;