/**
 * Created by sandeepj on 29/6/17.
 */
import React, {Component} from "react";
import DeviceSearch from './DeviceSearch'
import DeviceRow from './DeviceRow'
class DevicesTable extends Component{
    render(){
        return(
            <div className="row row-xl bg-white">
                {/*<!-- Begin Contextual Table -->*/}
                <div className="col-md-12">
                    {/*<!-- Begin Panel -->*/}
                    <div className="panel-x panel-transparent">
                        {/*<!-- Begin Panel Body -->*/}
                        <div className="panel-body">
                            {/*<!-- Begin Table REpsonsive -->*/}

                            <div className="table-responsive dataTables_wrapper">
                                {/*<!-- Begin Table Contextual -->*/}
                                <DeviceSearch/>
                                <table className="table table-hover ">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Device Name</th>
                                        <th>Status</th>
                                        <th>Action</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Samsung</td>
                                        <td><code>active</code></td>
                                        <td>Otto</td>

                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>I Phone</td>
                                        <td><code>active</code></td>
                                        <td>Thornton</td>

                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>LG</td>
                                        <td><code>active</code></td>
                                        <td><h5 className="m-n fw-thk text-danger"><i
                                            className="fa fa-edit text-success m-xs-r fa-fw"></i><a href=""
                                                                                                    className="text-black">
                                            Edit</a> <i className="fa fa-trash m-xs-r fa-fw "></i><a href="" className="text-black">Delete</a>
                                        </h5><h5 className="m-n fw-thk text-danger"></h5></td>

                                    </tr>
                                    </tbody>
                                </table>
                                {/*<!-- End Table Contextual -->*/}
                            </div>
                            {/*<!-- End Table Responsive -->*/}
                        </div>
                        {/*<!-- End Panel Body -->*/}
                    </div>
                    {/*<!-- End Panel -->*/}
                </div>
                {/*<!-- End Contextual Table -->*/}
            </div>
        )
    }
}
export default DevicesTable;