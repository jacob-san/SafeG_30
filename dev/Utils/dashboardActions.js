/**
 * Created by sandeepj on 4/7/17.
 */
import axios from 'axios';


module.exports= {
    getDashboardCounts () {
        return axios({
                url: 'http://10.10.1.5:5050/api/user/dashboard-counts',
                method: 'get',
                withCredentials: true,

            })
    },
    getLatestUsers(){
        return axios({
            url:'http://10.10.1.5:5050/api/user/list-latest-users',
            method:'get',
            withCredentials:true,
        })
    },
    getLatestAlerts(){
      return axios({
          url:'http://10.10.1.5:5050/api/user/fetch-latest-site-alerts',
          method:'get',
          withCredentials:true
      })
    },
    // getDashboardData(){
    //     return axios.all([
    //         getDashboardCounts(),
    //         getLatestUsers(),
    //         getLatestAlerts()
    //     ]).then((data)=>{
    //         var counts=data[0];
    //         var users=data[1];
    //         var alerts=data[2];
    //         return{
    //             counts,users,alerts
    //         }
    //     })
    // },

}