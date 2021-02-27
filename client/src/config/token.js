import clientAxios from './axios'

const tokenAuth = token =>{
    if(token){
        clientAxios.defaults.headers.common['haufe-token'] = token;
    } else {
        delete clientAxios.defaults.headers.common['haufe-token']
    }
}

export default tokenAuth;