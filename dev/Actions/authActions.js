/**
 * Created by sandeepj on 7/7/17.
 */
import axios from 'axios';
import {API_URL} from '../constants/APIconstants'
class authActions{
   static validateAuthToken(){
        return axios({
            url:API_URL+'/api/validate-auth-token',
            method:'get',
            withCredentials: true
        })
            .then((response)=>{
           if(response.data.status==="success"){
               console.log("Authtoken validated: User logged in")
               return true
           }
           return false
            })
    }
   static authenticate(email, password){
        return axios({
            url:API_URL+'/api/signin',
            method:'post',
            data:{
                email: email,
                password: password
            },
            withCredentials:true,
            contentType: "application/json"
        })
    }
    static userSignUp(firstName,lastName,email,phone,password){
       return axios({
           url:API_URL+'/api/signup',
           method:'put',
           data:{
               firstName:firstName,
               lastName:lastName,
               email:email,
               phone:phone,
               password:password
           },
           withCredentials:true
       })
    }
    static userLogout(){
        return axios({
            url:API_URL+'/api/logout',
            method:'post',
            withCredentials:true
        })
    }
}
export default authActions;