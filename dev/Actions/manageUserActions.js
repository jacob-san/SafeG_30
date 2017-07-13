/**
 * Created by sandeepj on 13/7/17.
 */
import axios from 'axios';
import {API_URL} from '../constants/APIconstants'
class manageUserActions {
    static getUserList() {
        return axios({
            url: API_URL + '/api/user/list-users',
            method: 'get',
            withCredentials: true
        })
    }
    static  addNewUser(firstname, lastname, email, phone, status) {
        // console.log(name+", "+make+", "+model+", "+token+", "+userID+", "+status)
        return axios({
            url: API_URL + '/api/user/create-user',
            method: 'post',
            data: {
                firstName: firstname,
                lastName: lastname,
                email: email,
                phone: phone,
                userStatus: status
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
    static  deleteUser(userId) {
        return axios({
            url: API_URL + '/api/user/delete-user',
            method: 'post',
            data: {
                userId: userId
            },
            withCredentials:true
        })
    }
    static editUser(firstname, lastname, email, phone, status) {
        return axios({
            url: API_URL + '/api/user/update-user',
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
export default manageUserActions;