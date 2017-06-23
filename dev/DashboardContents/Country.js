/**
 * Created by sandeepj on 23/6/17.
 */
import React, {Component} from 'react';
class Country extends Component {
    render() {
        return (
            <div className="six wide column">
                <div className="panel-x panel-transparent">
                    <div className="panel-body none-padding">
                        <div className="pull-left header text-uppercase"><strong>Country</strong></div>
                        <div className="header text-uppercase pull-right"><strong>Events Count</strong>
                        </div>
                    </div>
                    <div className="ui vertical menu">
                        <div className="item">
                            India <span className="ui label red">12</span>
                        </div>
                        <div className="item">
                            USA <span className="ui label orange">5</span>
                        </div>
                        <div className="item">
                            Australia <span className="ui label olive">3</span>
                        </div>
                        <div className="item">
                            Brazil <span className="ui label green">4</span>
                        </div>
                        <div className="item">
                            BTurkey<span className="ui label blue">8</span>
                        </div>
                        <div className="item">
                            Canada <span className="ui label brown">9</span>
                        </div>
                        <div className="item">
                            Argentina <span className="ui label teal">2</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Country;


