/**
 * Created by sandeepj on 10/7/17.
 */
import axios from 'axios';
import {API_URL} from '../constants/APIconstants'

class blackListActions{
    static getBlacklist(){
        return axios({
            url:API_URL+'/api/user/list-blacklists',
            method:'get',
            withCredentials:true
        })
            .then((response)=>{
                console.log(response.data)
            })
            .catch((err)=>{
            console.warn(err)
        })
    }
}
export default blackListActions;