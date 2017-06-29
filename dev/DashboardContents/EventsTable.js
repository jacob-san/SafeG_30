/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from 'react';
import EventSearch from './EventSearch';
import EventsTableRow from './EventsTableRow'

class EventsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trows: [{riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},],
            totalPages:"",
            currentPage:"",
            numberOfEntries:"",
            entriesShowing:[{first:"", last:""}],
        }
    }

    render() {
        return (
            <div className="eleven wide column bg-color">

                <div className="column">

                    <p></p>

                    {/*<!-- Begin Table -->*/}
                    <div className="col-md-12 ">
                        {/*<!-- Begin Panel -->*/}
                        <div className="panel-transparent">
                            {/*<!-- Begin Panel Body -->*/}
                            <div className="">

                                {/*<!-- Begin Datatable Tools -->*/}

                                <div id="datatable-tools_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="pull-left">
                                        <p className="header text-uppercase">Latest Alert Event</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. tenetur. Quas.</p>
                                    </div>
                                    <div className="DTTT_container"></div>
                                    <div className="clear"></div>

                                    <EventSearch/>

                                    <div>
                                        <table id="datatable-tools" className="table dataTable no-footer" role="grid"
                                               aria-describedby="datatable-tools_info">
                                            <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabIndex="0" aria-controls="datatable-tools"
                                                    rowSpan="1" colSpan="1" aria-sort="ascending"
                                                    aria-label="Name: activate to sort column descending"
                                                    style={{width: 272+'px'}}>RISK CODE
                                                </th>
                                                <th className="sorting" tabIndex="0" aria-controls="datatable-tools"
                                                    rowSpan="1" colSpan="1"
                                                    aria-label="Position: activate to sort column ascending"
                                                    style={{width: 404+'px'}}>EVENT TYPE
                                                </th>
                                                <th className="sorting" tabIndex="0" aria-controls="datatable-tools"
                                                    rowSpan="1" colSpan="1"
                                                    aria-label="Office: activate to sort column ascending"
                                                    style={{width: 214+'px'}}>HOST
                                                </th>
                                                <th className="sorting" tabIndex="0" aria-controls="datatable-tools"
                                                    rowSpan="1" colSpan="1"
                                                    aria-label="Salary: activate to sort column ascending"
                                                    style={{width: 182+'px'}}>TIME
                                                </th>
                                            </tr>
                                            </thead>

                                        </table>
                                    </div>
                                    <div className="h-250 table-responsive col-md-12">
                                        <table id="datatable-tools" className="table dataTable no-footer" role="grid"
                                               aria-describedby="datatable-tools_info">
                                            <div className="">
                                                <tbody>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">1</td>
                                                    <td>ALERT_SITE_TYPE</td>
                                                    <td>http://mypeeps.me</td>
                                                    <td>FRI Feb 26 2016</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">2</td>
                                                    <td>ALERT_SITE_TYPE</td>
                                                    <td>http://mypeeps.me</td>
                                                    <td>FRI Feb 26 2016</td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">3</td>
                                                    <td>ALERT_SITE_TYPE</td>
                                                    <td>http://mypeeps.me</td>
                                                    <td>FRI Feb 26 2016</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">4</td>
                                                    <td>ALERT_SITE_TYPE</td>
                                                    <td>http://mypeeps.me</td>
                                                    <td>FRI Feb 26 2016</td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">Brenden Wagner</td>
                                                    <td>Software Engineer</td>
                                                    <td>San Francisco</td>
                                                    <td>$206,850</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">Brielle Williamson</td>
                                                    <td>Integration Specialist</td>
                                                    <td>New York</td>
                                                    <td>$372,000</td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">Bruno Nash</td>
                                                    <td>Software Engineer</td>
                                                    <td>London</td>
                                                    <td>$163,500</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">Caesar Vance</td>
                                                    <td>Pre-Sales Support</td>
                                                    <td>New York</td>
                                                    <td>$106,450</td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">Cara Stevens</td>
                                                    <td>Sales Assistant</td>
                                                    <td>New York</td>
                                                    <td>$145,600</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                </tbody>
                                            </div>
                                        </table>
                                    </div>
                                    <div className="dataTables_info" id="datatable-tools_info" role="status"
                                         aria-live="polite">Showing 1 to 10 of 57 entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers"
                                         id="datatable-tools_paginate"><a className="paginate_button previous disabled"
                                                                          aria-controls="datatable-tools"
                                                                          data-dt-idx="0" tabIndex="0"
                                                                          id="datatable-tools_previous">Previous</a><span><a
                                        className="paginate_button current" aria-controls="datatable-tools"
                                        data-dt-idx="1" tabIndex="0">1</a><a className="paginate_button "
                                                                             aria-controls="datatable-tools"
                                                                             data-dt-idx="2" tabIndex="0">2</a><a
                                        className="paginate_button " aria-controls="datatable-tools" data-dt-idx="3"
                                        tabIndex="0">3</a><a className="paginate_button "
                                                             aria-controls="datatable-tools" data-dt-idx="4"
                                                             tabIndex="0">4</a><a className="paginate_button "
                                                                                  aria-controls="datatable-tools"
                                                                                  data-dt-idx="5" tabIndex="0">5</a><a
                                        className="paginate_button " aria-controls="datatable-tools" data-dt-idx="6"
                                        tabIndex="0">6</a></span><a className="paginate_button next"
                                                                    aria-controls="datatable-tools" data-dt-idx="7"
                                                                    tabIndex="0" id="datatable-tools_next">Next</a>
                                    </div>
                                </div>
                                {/*<!-- End Datatable Tools -->*/}
                            </div>
                            {/*<!-- End Panel Body -->*/}
                        </div>
                        {/*<!-- End Panel -->*/}
                    </div>



                    {/*<!-- End Table -->*/}

                </div>
            </div>


        );
    }
}
export default EventsTable;


