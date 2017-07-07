/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from 'react';
class InformationBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="column">
                    <div className="mini-stats-container mini-stats-pink">
                        <div className="mini-stats-content">
                            <h1 className="m-n fw-thk text-white">{this.props.deviceCount}</h1>
                            <small className="text-uppercase text-white">Registerd <strong>Device </strong></small>
                        </div>
                        <div className="mini-stats-icon">
                            <i className="fa fa-mobile fa-5x"></i>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="mini-stats-container mini-stats-violet">
                        <div className="mini-stats-content">
                            <h1 className="m-n fw-thk text-white">{this.props.activeUsersCount}</h1>
                            <small className="text-uppercase text-white">Active <strong>Users </strong></small>
                        </div>
                        <div className="mini-stats-icon">
                            <i className="fa fa-user fa-5x"></i>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="mini-stats-container mini-stats-green">
                        <div className="mini-stats-content">
                            <h1 className="m-n fw-thk text-white left floated">{this.props.eventsCount}</h1>
                            <div className="fw-right">
                                <h1 className="fw-thk text-white">89 <span>Existng Active</span></h1>
                                <h1 className="fw-thk text-white">{this.props.deviceCount} <span>Registered Device</span></h1>
                            </div>
                            <small className="text-uppercase text-white">Events</small>
                        </div>

                        <div className="mini-stats-icon">
                            <i className="fa fa-calendar fa-5x"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InformationBar;