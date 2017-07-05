/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from 'react';
import {Modal, OverlayTrigger, Button} from 'react-bootstrap';
class AddDeviceModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui small modal ">
                <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new device</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="description custom-width">
                                <form id="form-validation" className="form-horizontal" noValidate="noValidate">
                                    {/*<!-- Begin Required -->*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputRequired"
                                               className="control-label col-md-3 col-xs-12">Device Name</label>
                                        <div className="col-md-8 col-xs-12">
                                            <input type="text" className="form-control" placeholder="Device Name"/>
                                        </div>
                                    </div>
                                    {/*<!-- End Required -->*/}

                                    {/*<!-- Begin Required -->*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputRequired"
                                               className="control-label col-md-3 col-xs-12">Device Make</label>
                                        <div className="col-md-8 col-xs-12">
                                            <input type="text" className="form-control" placeholder="Device Make"/>
                                        </div>
                                    </div>
                                    {/*<!-- End Required -->*/}


                                    {/*<!-- Begin Required -->*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputRequired"
                                               className="control-label col-md-3 col-xs-12">Device Model</label>
                                        <div className="col-md-8 col-xs-12">
                                            <input type="text" className="form-control" placeholder="Device Model"/>
                                        </div>
                                    </div>
                                    {/*<!-- End Required -->*/}


                                    {/*<!-- Begin Required -->*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputRequired"
                                               className="control-label col-md-3 col-xs-12">Device Token</label>
                                        <div className="col-md-8 col-xs-12">
                                            <input type="text" className="form-control" placeholder="Device Token"/>
                                        </div>
                                    </div>
                                    {/*<!-- End Required -->*/}

                                    {/*<!-- Begin Required -->*/}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputRequired"
                                               className="control-label col-md-3 col-xs-12">Device Status</label>
                                        <div className="col-md-8 col-xs-12">
                                            <div className="inline field">
                                                <div className="ui checkbox">
                                                    {/*<input type="checkbox" tabIndex="0" className="hidden"/>*/}
                                                    {/*<label></label>*/}

                                                    <div className="checkbox m-lg-t">
                                                        <label htmlFor="checkbox-style-md1" className="checkbox-default primary">
                                                            <input type="checkbox" name="checkbox1" id="checkbox-style-md1"/>
                                                                <span></span>
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ui header center aligned container m-sm-r m-sm-b">
                                        <h5> Device Name is required</h5>
                                    </div>
                                    {/*<!-- End Required -->*/}
                                </form>

                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="ui btn btn-info w-150 deny m-xs-l">Save Changes</Button>
                        <Button className="ui btn btn-danger w-100 deny" onClick={this.props.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default AddDeviceModal;