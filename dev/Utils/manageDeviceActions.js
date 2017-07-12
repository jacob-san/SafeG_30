/**
 * Created by sandeepj on 6/7/17.
 */
import axios from 'axios';
import {API_URL} from '../constants/APIconstants'
class manageDeviceActions {
   static getDeviceList() {
        return axios({
            url: API_URL + '/api/user/list-devices',
            method: 'get',
            withCredentials: true
        })
    }
  static  addNewDevice(name, make, model, token,userID, status) {
       // console.log(name+", "+make+", "+model+", "+token+", "+userID+", "+status)
        return axios({
            url: API_URL + '/api/user/create-device',
            method: 'post',
            data: {
                deviceName: name,
                deviceMake: make,
                deviceModel: model,
                deviceToken: token,
                userId:userID,
                deviceStatus: status
            },
            withCredentials: true,
            contentType: "application/json"
        })
        // return axios.post(API_URL+'api/user/create-device', {
        //             deviceName: name,
        //             deviceMake: make,
        //             deviceModel: model,
        //             deviceToken: token,
        //             status: status,
        // })
    }
  static  deleteDevice(deviceId) {
        return axios({
            url: API_URL + '/api/user/delete-device',
            method: 'post',
            data: {
                deviceId: deviceId
            },
            withCredentials:true
        })
    }
   static editDevice(name, make, model, token, status) {
        return axios({
            url: API_URL + '',
            method: 'post',
            data: [{
                deviceName: '',
                deviceMake: '',
                deviceModel: '',
                deviceToken: '',
                status: ''
            }]
        })
    }
}
export default manageDeviceActions;
