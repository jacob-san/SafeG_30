/**
 * Created by sandeepj on 4/7/17.
 */
import axios from 'axios';
import {API_URL} from '../constants/APIconstants'
class dashboardActions {
   static getDashboardCounts() {
        return axios({
            url: API_URL + '/api/user/dashboard-counts',
            method: 'get',
            withCredentials: true,

        })
    }

   static getLatestUsers() {
        return axios({
            url: API_URL + '/api/user/list-latest-users',
            method: 'get',
            withCredentials: true,
        })
    }


   static getLatestAlerts() {
        return axios({
            url: API_URL + '/api/user/fetch-latest-site-alerts',
            method: 'get',
            withCredentials: true
        })
    }
    static fetchProfile(){
       return axios({
           url:API_URL+'/api/user/fetch-profile',
           method:'get',
           withCredentials:true
       })
    }
}
export default dashboardActions;
