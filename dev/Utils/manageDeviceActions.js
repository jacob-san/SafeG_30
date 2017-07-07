/**
 * Created by sandeepj on 6/7/17.
 */
import axios from 'axios';
module.exports = {
    getDeviceList(){
        return axios({
            url: 'http://10.10.1.5:5050/api/user/list-devices',
            method: 'get',
            withCredentials: true
        })
    },
    addNewDevice(name, make, model, token, status){
        return axios({
            url: 'http://10.10.1.5:5050/api/user/create-device',
            method: 'post',
            data: [{
                deviceName: name,
                deviceMake: make,
                deviceModel: model,
                deviceToken: token,
                deviceStatus: status
            }],
            withCredentials: true
        })
    },

}