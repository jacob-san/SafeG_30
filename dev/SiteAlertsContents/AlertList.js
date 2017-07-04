/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from 'react'
import AlertListItem from './AlertListItem'
class AlertList extends Component{
    constructor(props){
        super(props);
        this.state={
            alerts:[
                {alertName:'Lg G2'},
                {alertName:'Samsung J7'},
                {alertName:'Oppo'},
                {alertName:'iPhone'}]
        }
    }
    render(){
        return(
            <ul id="todo-projects-ul" className="h-200 table-responsive">

                {/*<li data-todo-target="Lg-g2" className="todo-projects-li red-dot">*/}
                    {/*<span className="todo-title">Lg G2</span>*/}
                {/*</li>*/}
                {this.state.alerts.map((alert,index)=>{
                    return <AlertListItem key={index}  alert={alert} handleAlertClick={this.props.handleAlertClick}/>
                })}


                {/*<!-- Begin Project List -->*/}
                {/*<li data-todo-target="samsung-j7" className="todo-projects-li orange-dot">*/}
                    {/*<span className="todo-title">Samsung J7</span>*/}

                {/*</li>*/}
                {/*/!*<!-- End Project List -->*!/*/}

                {/*/!*<!-- Begin Project List -->*!/*/}
                {/*<li data-todo-target="oppo" className="todo-projects-li green-dot">*/}
                    {/*<span className="todo-title">Oppo</span>*/}

                {/*</li>*/}
                {/*/!*<!-- End Project List -->*!/*/}


                {/*<li data-todo-target="i-phone" className="todo-projects-li">*/}
                    {/*<span className="todo-title">I Phone</span>*/}

                {/*</li>*/}
                {/*/!*<!-- End Project List -->*!/*/}


                {/*<li></li>*/}
                {/*<!-- Begin Project List -->*/}

                {/*<!-- End Project List -->*/}
            </ul>
        )
    }
}
export default AlertList;