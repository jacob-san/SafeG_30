/**
 * Created by sandeepj on 4/7/17.
 */
import axios from 'axios';


module.exports= {
    getDashboardCounts () {
        return axios({
                url: 'http://10.10.1.5:7070/api/user/dashboard-counts',
                method: 'get',
                responseType: 'json',
                withCredentials: true
            })
    }
}