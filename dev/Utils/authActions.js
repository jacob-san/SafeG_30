/**
 * Created by sandeepj on 7/7/17.
 */
import axios from 'axios';
module.exports={
    validateAuthToken(){
        return axios({
            url:'http://10.10.1.5:5050/api/validate-auth-token',
            method:'get',
            withCredentials: true
        })
    },
    tryLogin(email,password){
        console.log(email+ password)
        return axios({
            url:'http://10.10.1.5:5050/api/signin',
            method:'post',
            data:{
                email: email,
                password: password
            },
            // withCredentials:true
        })
    }
}