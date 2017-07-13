/**
 * Created by sandeepj on 23/6/17.
 */
import React, {Component} from 'react';
import CountryAndEvent from './CountryAndEvent'
class CountriesList extends Component {
    constructor(props){
        super(props);
        this.state={
            countries:[{
                country:'India',
                eventCount:'12'
            },{
                country:'India',
                eventCount:'12'
            }]
        }
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="panel-x panel-transparent">
                    <div className="panel-body none-padding">
                        <div className="pull-left header text-uppercase"><strong>Country</strong></div>
                        <div className="header text-uppercase pull-right"><strong>Events Count</strong>
                        </div>
                    </div>
                    <div className="ui vertical menu">
                        {this.state.countries.map((country, index)=>{
                            return(
                            <CountryAndEvent key={index} countryInfo={country}/>
                            )})}
                    </div>
                </div>
            </div>
        )
    }
}

export default CountriesList;


