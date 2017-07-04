/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from "react";
class BlackListTable extends Component{
    render(){
        return(
            <div className="todo-project-content">
                <div className="pull-right"><a href="javascript:void(0)" className="btn btn-info btn-block m-md-t">

                    Subscribe
                </a>
                </div>
                {/*<!-- Begin Todo Project Header -->*/}
                <h3 className="m-n p-lg fw-thk">
                    <span className="todo-project-title">{this.props.blacklistItemTitle}</span>

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
                    <div id="Blacklist" className="todo-content-container todo-visible">
                        {/*<!-- Begin Todo Task -->*/}
                        <div className="table-responsive">
                            {/*<!-- Begin Table Bordered -->*/}
                            <table className="table table-bordered">

                                <thead>
                                <tr>
                                    <th className="v-align">Subscriber</th>
                                    <th className="v-align">Host Count</th>
                                    <th className="v-align">Blacklist ID</th>
                                    <th className="v-align">Blacklist Active</th>
                                    <th className="v-align">Created</th>
                                    <th className="v-align">Updated</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>3433</td>
                                    <td>00000N</td>
                                    <td>Active</td>
                                    <td>3 Weaks ago</td>
                                    <td>3 Weaks ago</td>

                                </tr>

                                </tbody>
                            </table>

                            {/*<!-- End Table Bordered -->*/}
                        </div>

                    </div>
                    {/*<!-- End Android Task -->*/}

                    {/*<!-- Begin Apple Task -->*/}
                    <div id="Blacklist-by-Mia" className="todo-content-container">
                        <div className="table-responsive">
                            {/*<!-- Begin Table Bordered -->*/}
                            <table className="table table-bordered">

                                <thead>
                                <tr>
                                    <th className="v-align">Subscriber</th>
                                    <th className="v-align">Host Count</th>
                                    <th className="v-align">Blacklist ID</th>
                                    <th className="v-align">Blacklist Active</th>
                                    <th className="v-align">Created</th>
                                    <th className="v-align">Updated</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>3433</td>
                                    <td>00000N</td>
                                    <td>Active</td>
                                    <td>3 Weaks ago</td>
                                    <td>3 Weaks ago</td>

                                </tr>

                                </tbody>
                            </table>

                            {/*<!-- End Table Bordered -->*/}
                        </div>
                    </div>
                    {/*<!-- End Apple Task -->*/}

                    {/*<!-- Begin Windows Task -->*/}
                    <div id="Blacklist-24" className="todo-content-container">
                        <div className="table-responsive">
                            {/*<!-- Begin Table Bordered -->*/}
                            <table className="table table-bordered">

                                <thead>
                                <tr>
                                    <th className="v-align">Subscriber</th>
                                    <th className="v-align">Host Count</th>
                                    <th className="v-align">Blacklist ID</th>
                                    <th className="v-align">Blacklist Active</th>
                                    <th className="v-align">Created</th>
                                    <th className="v-align">Updated</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>3433</td>
                                    <td>00000N</td>
                                    <td>Active</td>
                                    <td>3 Weaks ago</td>
                                    <td>3 Weaks ago</td>

                                </tr>

                                </tbody>
                            </table>

                            {/*<!-- End Table B/ordered -->*/}
                        </div>
                    </div>
                    {/*<!-- End Windows Task -->*/}

                    {/*<!-- Begin Linux Task -->*/}
                    <div id="Blacklist-23" className="todo-content-container">
                        <div className="table-responsive">
                            {/*<!-- Begin Table Bordered -->*/}
                            <table className="table table-bordered">

                                <thead>
                                <tr>
                                    <th className="v-align">Subscriber</th>
                                    <th className="v-align">Host Count</th>
                                    <th className="v-align">Blacklist ID</th>
                                    <th className="v-align">Blacklist Active</th>
                                    <th className="v-align">Created</th>
                                    <th className="v-align">Updated</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>3433</td>
                                    <td>00000N</td>
                                    <td>Active</td>
                                    <td>3 Weaks ago</td>
                                    <td>3 Weaks ago</td>

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
export default BlackListTable;