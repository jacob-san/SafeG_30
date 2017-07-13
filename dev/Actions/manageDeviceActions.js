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
// fetch('http://10.10.1.5:5050/api/user/create-device',{
//     method:'post',
//     withCredentials:true,
//     headers:{
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(
//         {
//             "deviceName": "Huawei"
//         }
//     )
// })


// fetch('http://10.10.1.5:5050/api/user/create-device',{
//     method:'post',
//     withCredentials:true,
//     headers:{
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         Cookie:{
//             'authToken':'9Hv79SM73OxP3iLQsXPuL2juf05UhriSuPYOvFcnEbdxmLgWFn6tdmZyJb2ulzZYpQx3ji7XabYxGRAuBpDbHFaRDejABCHKNL-MnWpPdXwKg9UnSSsRi0ebgXed-8ET66C71is_fTz3G7qd9POuIgMecxlZNYyBYmU8jZa-WBs',
//             'JSESSIONID':'la9ykzzoeqktlsui1xrccv6z'
//         }
//     },
//     body: JSON.stringify(
//         {
//             "deviceName": "Huawei"
//         }
//     )
// })
