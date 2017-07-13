/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from 'react';
import EventSearch from './EventSearch';
import EventsTableRow from './EventsTableRow'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const columns = [
    {   Header: 'RISK CODE',
        accessor: 'riskCode'},
    {   Header: 'EVENT TYPE',
        accessor: 'eventType'},
    {   Header: 'HOST',
        accessor: 'host'},
    {   Header: 'TIME',
        accessor: 'time'}
]

class EventsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertEvents: [{riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"},
                {riskCode: "1", eventType: "ALERT_SITE_TYPE", host: "http://mypeeps.me", time: "FRI Feb 26 2016"},
                {riskCode: "Brenden Wagner", eventType: "Software Engineer", host: "San Francisco", time: "$206,850"}],
            totalPages: "",
            currentPage: "",
            numberOfEntries: "",
            entriesShowing: [{first: "", last: ""}],
        }
    }

    render() {
        var style = {
            color:'black',
            fontWeight:'bold',
            textAlign: 'left',
            fontSize:'12px'
        };
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
                                    </div>
                                    <div className="DTTT_container"></div>
                                    <div className="clear"></div>

                                    <EventSearch/>

                                    <div>
                                        <table id="datatable-tools" className="table dataTable no-footer" role="grid"
                                               aria-describedby="datatable-tools_info">
                                            <div>
                                                <ReactTable
                                                    className="-striped -highlight"
                                                    data={this.state.alertEvents}
                                                    columns={columns}
                                                    defaultPageSize="10"
                                                    pageSizeOptions= {[10, 20]}
                                                    sortable={false}
                                                    headerStyle={{
                                                        color:'black',
                                                        fontWeight:'bold',
                                                        textAlign: 'left',
                                                        fontSize:'12px'}}
                                                />
                                                <br />
                                                <br />
                                            </div>

                                        </table>
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




