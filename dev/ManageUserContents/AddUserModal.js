/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import manageUserActions from '../Actions/manageUserActions'
class AddUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            status: 'active',
            isStatusChecked: true
        }
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
    }

    onChangeFirstName(e) {
        this.setState({
            name: e.target.value
        })

    }

    onChangeLastname(e) {
        this.setState({
            make: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            model: e.target.value
        })
    }

    onChangePhone(e) {
        this.setState({
            token: e.target.value
        })
    }

    onChangeStatus() {
        this.setState({
            isStatusChecked: !this.state.isStatusChecked
        })
        if (this.state.isStatusChecked) {
            this.setState({
                status: "active"
            })
        }
        else {
            this.setState({
                status: ""
            })
        }
    }

    handleSaveChanges() {
        manageUserActions.addNewUser(this.state.firstname, this.state.lastname, this.state.email, this.state.phone, this.state.status)
        // .then((response) => {
        //     console.log(response.data)
        // })
    }

    render() {
        return (
            <div className="ui small modal ">
                <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="description custom-width">
                                <form id="form-validation" className="form-horizontal" noValidate="noValidate">
                                    {/*<!-- Begin Required -->*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputRequired"
                                               className="control-label col-md-3 col-xs-12">First Name</label>
                                        <div className="col-md-8 col-xs-12">
                                            <input type="text" className="form-control" placeholder="First Name"
                                                   onChange={this.onChangeFirstName}/>
                                        </div>
                                    </div>
                                    {/*<!-- End Required -->*/}

                                    {/*<!-- Begin Required -->*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputRequired"
                                               className="control-label col-md-3 col-xs-12">Last Name</label>
                                        <div className="col-md-8 col-xs-12">
                                            <input type="text" className="form-control" placeholder="Last Name"
                                                   onChange={this.onChangeLastname}/>
                                        </div>
                                    </div>
                                    {/*<!-- End Required -->*/}


                                    {/*<!-- Begin Required -->*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputRequired"
                                               className="control-label col-md-3 col-xs-12">Email</label>
                                        <div className="col-md-8 col-xs-12">
                                            <input type="text" className="form-control" placeholder="Email"
                                                   onChange={this.onChangeEmail}/>
                                        </div>
                                    </div>
                                    {/*<!-- End Required -->*/}


                                    {/*<!-- Begin Required -->*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputRequired"
                                               className="control-label col-md-3 col-xs-12">Phone</label>
                                        <div className="col-md-8 col-xs-12">
                                            <input type="text" className="form-control" placeholder="Phone"
                                                   onChange={this.onChangePhone}/>
                                        </div>
                                    </div>
                                    {/*<!-- End Required -->*/}


                                    {/*<!-- Begin Required -->*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputRequired"
                                               className="control-label col-md-3 col-xs-12">User Status</label>
                                        <div className="col-md-8 col-xs-12">
                                            <div className="inline field">
                                                <div className="ui checkbox">
                                                    {/*<input type="checkbox" tabIndex="0" className="hidden"/>*/}
                                                    {/*<label></label>*/}

                                                    <div className="checkbox m-lg-t">
                                                        <label htmlFor="checkbox-style-md1"
                                                               className="checkbox-default primary">
                                                            <input type="checkbox" name="checkbox1"
                                                                   id="checkbox-style-md1"
                                                                   onChange={this.onChangeStatus}
                                                                   checked={this.state.isStatusChecked}/>
                                                            <span></span>
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- End Required -->*/}
                                </form>

                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="ui btn btn-info w-150 deny m-xs-l" onClick={this.handleSaveChanges}>Save
                            Changes</Button>
                        <Button className="ui btn btn-danger w-100 deny" onClick={this.props.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default AddUserModal;