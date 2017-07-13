/**
 * Created by sandeepj on 28/6/17.
 */
import React, {Component} from "react";
import DevicesTable from './ManageDeviceContent/DevicesTable';
import AddDeviceModal from './ManageDeviceContent/AddDeviceModal';
import manageDeviceActions from './Actions/manageDeviceActions'
class ManageDevices extends Component {
    constructor(props) {
        super(props);
        this.state={
            showModal:false,
            devices:[{
                deviceActive:'',
                deviceId:'',
                deviceImageURL:'',
                deviceMake:'',
                deviceModel:'',
                deviceName:'',
                deviceSince:'',
                deviceStatus:'',
                deviceToken:'',
                deviceType:'',
                entityId:'',
                message:'',
                status:'',
                userId:'',
                userType:'',
                valid:'',
                validDeviceName:'',
                verified:''},
            ],
            modalTitle:'Add new device'
        }
        this.closeModal=this.closeModal.bind(this);
        this.openModal=this.openModal.bind(this);
        this.handleEditClick=this.handleEditClick.bind(this)
        this.handleDeleteClick=this.handleDeleteClick.bind(this)
    }
    componentDidMount(){
        manageDeviceActions.getDeviceList()
            .then((response)=>{
            this.setState({
                devices:response.data.devices
            })
                console.log(response.data)
            })
    }
    handleDeleteClick(deviceId){
        console.log(deviceId)
        manageDeviceActions.deleteDevice(deviceId)
    }
    handleEditClick(deviceId){
        console.log(deviceId)
        this.setState({
            modalTitle:"Edit Device",
            showModal:true
        })
    }
    closeModal(){
        this.setState({
            showModal:false
        })
    }
    openModal(){
        this.setState({
            showModal:true,
            modalTitle:"Add new"
        })
    }

    render() {
        return (
                <div id="page-content">
                    <div className="row row-xl">
                        <div className="col-md-3 text-left">
                            {/*<!-- Begin Panel -->*/}
                            <div className="page-title">
                                <h3>Dashboard</h3>
                                <ol className="breadcrumb">
                                    <li>
                                        <small><i className="fa fa-home fa-fw m-xs-r"></i>Home</small>
                                    </li>
                                    <li><a href="javascript:void(0)" className="text-info">
                                        <small>Manage Device</small>
                                    </a></li>
                                </ol>

                            </div>
                            {/*<!-- End Panel -->*/}
                        </div>

                        <div className="col-md-9 text-right">
                            {/*<!-- Begin Panel -->*/}
                            <div className="ui justified right aligned">

                                <button className="ui btn btn-primary w-75 m-sm-r m-sm-b" onClick={this.openModal}> Add <i
                                    className="fa fa-plus fa-fw"></i></button>


                            </div>
                            {/*<!-- End Panel -->*/}
                        </div>
                        {/*<!-- End Panel -->*/}


                        {/*<!-- End Panel -->*/}
                    </div>

                    <DevicesTable devices={this.state.devices} handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick}/>
                    <AddDeviceModal showModal={this.state.showModal} closeModal={this.closeModal} modalTitle={this.state.modalTitle}/>
                </div>
        )
    }
}
export default ManageDevices;
