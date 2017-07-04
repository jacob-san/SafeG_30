/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from 'react'
class AlertTable extends Component{
    render(){
        return(
            <div className="todo-project-content">
                <div className="pull-right"><a href="javascript:void(0)"
                                               className="btn btn-danger btn-block m-md-t">
                    <i className="fa fa-trash-o fa-fw m-xs-r"></i>
                    Remove From Blacklist
                </a>
                </div>
                {/*<!-- Begin Todo Project Header -->*/}
                <h3 className="m-n p-lg fw-thk">
                    <span className="todo-project-title">{this.props.alertTitle}</span>

                </h3>
                {/*<!-- Begin Todo Project Header -->*/}

                {/*<!-- Begin Todo Add Task Container -->*/}
                <div className="todo-add-task-container">
                    {/*<!-- Begin Form -->*/}
                    {/*<!-- <form> -->*/}

                    {/*<!-- </form> -->*/}
                    {/*<!-- End Form -->*/}
                </div>
                {/*<!-- End Todo Add Task Container -->*/}

                {/*<!-- Begin Todo Task Container -->*/}
                <div className="todo-task-container">
                    {/*<!-- Begin Android Task -->*/}
                    <div id="Lg-g2" className="todo-content-container todo-visible">
                        {/*<!-- Begin Todo Task -->*/}
                        <div className="table-responsive">
                            {/*<!-- Begin Table Bordered -->*/}
                            <table className="table table-bordered">

                                <thead>
                                <tr>
                                    <th className="v-align">Alert</th>
                                    <th className="v-align">URL</th>
                                    <th className="v-align">Port</th>
                                    <th className="v-align">Timestamp</th>
                                    <th className="v-align">Risk Code</th>
                                    <th className="v-align">Device Name</th>
                                    <th className="v-align">SSl</th>
                                    <th className="v-align">Confidence</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Cross-Domain javaScript Source File Inclusion</td>
                                    <td>http://dexlock.com/js/jquery.prettyphoto.js</td>
                                    <td>80</td>
                                    <td>Tue Mar 01 2016</td>
                                    <td>1</td>
                                    <td>LG G2</td>
                                    <td>False</td>
                                    <td>2</td>
                                </tr>

                                </tbody>
                            </table>

                            {/*<!-- End Table Bordered -->*/}
                        </div>

                    </div>
                    {/*<!-- End Android Task -->*/}

                    {/*<!-- Begin Apple Task -->*/}
                    <div id="samsung-j7" className="todo-content-container">
                        <div className="table-responsive">
                            {/*<!-- Begin Table Bordered -->*/}
                            <table className="table table-bordered">

                                <thead>
                                <tr>
                                    <th className="v-align">Alert</th>
                                    <th className="v-align">URL</th>
                                    <th className="v-align">Port</th>
                                    <th className="v-align">Timestamp</th>
                                    <th className="v-align">Risk Code</th>
                                    <th className="v-align">Device Name</th>
                                    <th className="v-align">SSl</th>
                                    <th className="v-align">Confidence</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Cross-Domain javaScript Source File Inclusion</td>
                                    <td>http://dexlock.com/js/jquery.prettyphoto.js</td>
                                    <td>80</td>
                                    <td>Tue Mar 01 2016</td>
                                    <td>1</td>
                                    <td>LG G2</td>
                                    <td>False</td>
                                    <td>2</td>
                                </tr>

                                </tbody>
                            </table>


                            {/*<!-- End Table Bordered -->*/}
                        </div>
                    </div>
                    {/*<!-- End Apple Task -->*/}

                    {/*<!-- Begin Windows Task -->*/}
                    <div id="oppo" className="todo-content-container">
                        <div className="table-responsive">
                            {/*<!-- Begin Table Bordered -->*/}
                            <table className="table table-bordered">

                                <thead>
                                <tr>
                                    <th className="v-align">Alert</th>
                                    <th className="v-align">URL</th>
                                    <th className="v-align">Port</th>
                                    <th className="v-align">Timestamp</th>
                                    <th className="v-align">Risk Code</th>
                                    <th className="v-align">Device Name</th>
                                    <th className="v-align">SSl</th>
                                    <th className="v-align">Confidence</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Cross-Domain javaScript Source File Inclusion</td>
                                    <td>http://dexlock.com/js/jquery.prettyphoto.js</td>
                                    <td>80</td>
                                    <td>Tue Mar 01 2016</td>
                                    <td>1</td>
                                    <td>LG G2</td>
                                    <td>False</td>
                                    <td>2</td>
                                </tr>

                                </tbody>
                            </table>


                            {/*<!-- End Table Bordered -->*/}
                        </div>
                    </div>
                    {/*<!-- End Windows Task -->*/}

                    {/*<!-- Begin Linux Task -->*/}
                    <div id="i-phone" className="todo-content-container">
                        <div className="table-responsive">
                            {/*<!-- Begin Table Bordered -->*/}
                            <table className="table table-bordered">

                                <thead>
                                <tr>
                                    <th className="v-align">Alert</th>
                                    <th className="v-align">URL</th>
                                    <th className="v-align">Port</th>
                                    <th className="v-align">Timestamp</th>
                                    <th className="v-align">Risk Code</th>
                                    <th className="v-align">Device Name</th>
                                    <th className="v-align">SSl</th>
                                    <th className="v-align">Confidence</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Cross-Domain javaScript Source File Inclusion</td>
                                    <td>http://dexlock.com/js/jquery.prettyphoto.js</td>
                                    <td>80</td>
                                    <td>Tue Mar 01 2016</td>
                                    <td>1</td>
                                    <td>LG G2</td>
                                    <td>False</td>
                                    <td>2</td>
                                </tr>

                                </tbody>
                            </table>


                            {/*<!-- End Table Bordered -->*/}
                        </div>
                    </div>
                    {/*<!-- End Linux Task -->*/}

                </div>
            </div>
        )
    }
}
export default AlertTable;