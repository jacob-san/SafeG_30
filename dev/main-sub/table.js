/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from 'react';
import TableRow from './tableRow'

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            trows:[{riskCode:"1", eventType:"ALERT_SITE_TYPE", host:"http://mypeeps.me", time:"FRI Feb 26 2016"},
                {riskCode:"Brenden Wagner", eventType:"Software Engineer", host:"San Francisco", time:"$206,850"},
                {riskCode:"1", eventType:"ALERT_SITE_TYPE", host:"http://mypeeps.me", time:"FRI Feb 26 2016"},
                {riskCode:"Brenden Wagner", eventType:"Software Engineer", host:"San Francisco", time:"$206,850"},
                {riskCode:"1", eventType:"ALERT_SITE_TYPE", host:"http://mypeeps.me", time:"FRI Feb 26 2016"},
                {riskCode:"Brenden Wagner", eventType:"Software Engineer", host:"San Francisco", time:"$206,850"},
                {riskCode:"1", eventType:"ALERT_SITE_TYPE", host:"http://mypeeps.me", time:"FRI Feb 26 2016"},
                {riskCode:"Brenden Wagner", eventType:"Software Engineer", host:"San Francisco", time:"$206,850"},
                {riskCode:"1", eventType:"ALERT_SITE_TYPE", host:"http://mypeeps.me", time:"FRI Feb 26 2016"},
                {riskCode:"Brenden Wagner", eventType:"Software Engineer", host:"San Francisco", time:"$206,850"},]
        }
    }
    render(){
        return(
            <div className="h-250 table-responsive col-md-12">
                <table id="datatable-tools" className="table dataTable no-footer"
                       role="grid"
                       aria-describedby="datatable-tools_info">
                    <thead>
                    <tr role="row">
                        <th className="sorting_asc" tabIndex="0"
                            aria-controls="datatable-tools"
                            rowSpan="1" colSpan="1" aria-sort="ascending"
                            aria-label="Name: activate to sort column descending"
                            style={{width: '272px'}}>RISK CODE
                        </th>
                        <th className="sorting" tabIndex="0"
                            aria-controls="datatable-tools"
                            rowSpan="1" colSpan="1"
                            aria-label="Position: activate to sort column ascending"
                            style={{width: '404px'}}>EVENT TYPE
                        </th>
                        <th className="sorting" tabIndex="0"
                            aria-controls="datatable-tools"
                            rowSpan="1" colSpan="1"
                            aria-label="Office: activate to sort column ascending"
                            style={{width: '214px'}}>HOST
                        </th>
                        <th className="sorting" tabIndex="0"
                            aria-controls="datatable-tools"
                            rowSpan="1" colSpan="1"
                            aria-label="Salary: activate to sort column ascending"
                            style={{width: '182px'}}>TIME
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {/*<tr role="row" className="odd">*/}
                        {/*<td className="sorting_1">1</td>*/}
                        {/*<td>ALERT_SITE_TYPE</td>*/}
                        {/*<td>http://mypeeps.me</td>*/}
                        {/*<td>FRI Feb 26 2016</td>*/}
                    {/*</tr>*/}

                    {this.state.trows.map((row)=>{
                        return(
                          <TableRow riskCode={row.riskCode} eventType={row.eventType} host={row.host} time={row.time}/>
                        );
                    })}

                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">2</td>*/}
                        {/*<td>ALERT_SITE_TYPE</td>*/}
                        {/*<td>http://mypeeps.me</td>*/}
                        {/*<td>FRI Feb 26 2016</td>*/}
                    {/*</tr>*/}
                    {/*<tr role="row" className="odd">*/}
                        {/*<td className="sorting_1">3</td>*/}
                        {/*<td>ALERT_SITE_TYPE</td>*/}
                        {/*<td>http://mypeeps.me</td>*/}
                        {/*<td>FRI Feb 26 2016</td>*/}
                    {/*</tr>*/}
                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">4</td>*/}
                        {/*<td>ALERT_SITE_TYPE</td>*/}
                        {/*<td>http://mypeeps.me</td>*/}
                        {/*<td>FRI Feb 26 2016</td>*/}
                    {/*</tr>*/}
                    {/*<tr role="row" className="odd">*/}
                        {/*<td className="sorting_1">Brenden Wagner</td>*/}
                        {/*<td>Software Engineer</td>*/}
                        {/*<td>San Francisco</td>*/}
                        {/*<td>$206,850</td>*/}
                    {/*</tr>*/}
                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">Brielle Williamson</td>*/}
                        {/*<td>Integration Specialist</td>*/}
                        {/*<td>New York</td>*/}
                        {/*<td>$372,000</td>*/}
                    {/*</tr>*/}
                    {/*<tr role="row" className="odd">*/}
                        {/*<td className="sorting_1">Bruno Nash</td>*/}
                        {/*<td>Software Engineer</td>*/}
                        {/*<td>London</td>*/}
                        {/*<td>$163,500</td>*/}
                    {/*</tr>*/}
                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">Caesar Vance</td>*/}
                        {/*<td>Pre-Sales Support</td>*/}
                        {/*<td>New York</td>*/}
                        {/*<td>$106,450</td>*/}
                    {/*</tr>*/}
                    {/*<tr role="row" className="odd">*/}
                        {/*<td className="sorting_1">Cara Stevens</td>*/}
                        {/*<td>Sales Assistant</td>*/}
                        {/*<td>New York</td>*/}
                        {/*<td>$145,600</td>*/}
                    {/*</tr>*/}
                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">Cedric Kelly</td>*/}
                        {/*<td>Senior Javascript Developer</td>*/}
                        {/*<td>Edinburgh</td>*/}
                        {/*<td>$433,060</td>*/}
                    {/*</tr>*/}

                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">Cedric Kelly</td>*/}
                        {/*<td>Senior Javascript Developer</td>*/}
                        {/*<td>Edinburgh</td>*/}
                        {/*<td>$433,060</td>*/}
                    {/*</tr>*/}

                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">Cedric Kelly</td>*/}
                        {/*<td>Senior Javascript Developer</td>*/}
                        {/*<td>Edinburgh</td>*/}
                        {/*<td>$433,060</td>*/}
                    {/*</tr>*/}

                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">Cedric Kelly</td>*/}
                        {/*<td>Senior Javascript Developer</td>*/}
                        {/*<td>Edinburgh</td>*/}
                        {/*<td>$433,060</td>*/}
                    {/*</tr>*/}

                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">Cedric Kelly</td>*/}
                        {/*<td>Senior Javascript Developer</td>*/}
                        {/*<td>Edinburgh</td>*/}
                        {/*<td>$433,060</td>*/}
                    {/*</tr>*/}

                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">Cedric Kelly</td>*/}
                        {/*<td>Senior Javascript Developer</td>*/}
                        {/*<td>Edinburgh</td>*/}
                        {/*<td>$433,060</td>*/}
                    {/*</tr>*/}

                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">Cedric Kelly</td>*/}
                        {/*<td>Senior Javascript Developer</td>*/}
                        {/*<td>Edinburgh</td>*/}
                        {/*<td>$433,060</td>*/}
                    {/*</tr>*/}

                    {/*<tr role="row" className="even">*/}
                        {/*<td className="sorting_1">Cedric Kelly</td>*/}
                        {/*<td>Senior Javascript Developer</td>*/}
                        {/*<td>Edinburgh</td>*/}
                        {/*<td>$433,060</td>*/}
                    {/*</tr>*/}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table;
