/**
 * Created by sandeepj on 13/7/17.
 */
import React, {Component} from "react";
import UsersTable from './ManageUserContents/UsersTable';
import AddUserModal from './ManageUserContents/AddUserModal';
import manageUserActions from './Actions/manageUserActions'
class ManageUsers extends Component {
    constructor(props) {
        super(props);
        this.state={
            showModal:false,
            users:[{
                firstname:'',
                lastname:'',
                email:'',
                phone:'',
                status:''
            }],
            modalTitle:'Add new User'
        }
        this.closeModal=this.closeModal.bind(this);
        this.openModal=this.openModal.bind(this);
        this.handleEditClick=this.handleEditClick.bind(this)
        this.handleDeleteClick=this.handleDeleteClick.bind(this)
    }
    componentDidMount(){
        manageUserActions.getUserList()
            .then((response)=>{
                this.setState({
                    users:response.data.users
                })
                console.log(response.data)
            })
    }
    handleDeleteClick(userId){
        console.log(userId)
        manageUserActions.deleteUser(userId)
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
                                    <small>Manage User</small>
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

                <UsersTable users={this.state.users} handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick}/>
                <AddUserModal showModal={this.state.showModal} closeModal={this.closeModal} modalTitle={this.state.modalTitle}/>
            </div>
        )
    }
}
export default ManageUsers;
