/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from 'react';

class Column extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.type=="pink" &&
                <div className="column">
                    <div className="mini-stats-container mini-stats-pink">
                        <div className="mini-stats-content">
                            <h1 className="m-n fw-thk text-white">{this.props.number}</h1>
                            <small className="text-uppercase text-white">{this.props.textLight}<strong>{this.props.textBold} </strong></small>
                        </div>

                        <div className="mini-stats-icon">
                            <i className="fa fa-mobile fa-5x"></i>
                        </div>
                    </div>
                </div>}

                {this.props.type=="green" &&
                    <div className="column">
                    <div className="mini-stats-container mini-stats-violet">
                    <div className="mini-stats-content">
                    <h1 className="m-n fw-thk text-white">{this.props.number}</h1>
                    <small className="text-uppercase text-white">{this.props.textLight}<strong>{this.props.textBold} </strong>
                    </small>
                    </div>
                    <div className="mini-stats-icon">
                    <i className="fa fa-user fa-5x"></i>
                    </div>
                    </div>
                    </div>}
                {this.props.type=="blue"&&
                    <div className="column">
                <div className="mini-stats-container mini-stats-green">
                <div className="mini-stats-content">
                <h1 className="m-n fw-thk text-white left floated">{this.props.number}</h1>
                {/*<div className="fw-right">*/}
                {/*<h1 className="fw-thk text-white">89 <span>Existng Active</span></h1>*/}
                {/*<h1 className="fw-thk text-white">9 <span>Registered Device</span></h1>*/}
                {/*</div>*/}
                <small className="text-uppercase text-white">{this.props.textLight}<strong>{this.props.textBold} </strong></small>
                </div>

                <div className="mini-stats-icon">
                <i className="fa fa-calendar fa-5x"></i>
                </div>
                </div>
                </div>  }

            </div>


        )
    }
}
export default Column;