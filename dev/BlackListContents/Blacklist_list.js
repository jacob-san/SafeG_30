/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from "react";
import Blacklist_listItem from './Blacklist_listItem'
class Blacklist_list extends Component{
    constructor(props){
        super(props);
        this.state={
            blacklistItems:[
                {name:'Blacklist', hostCount:'4'},
                {name:'Blacklist-by-Mia', hostCount:'101'},
                {name:'Blacklist-24', hostCount:'3422'},
                {name:'Blacklist 23', hostCount:'52'}]
        }
    }
    render(){
        return(
            <ul id="todo-projects-ul" className="h-200 table-responsive">
                {/*<!-- Begin Project List -->*/}
                {/*<li data-todo-target="Blacklist" className="todo-projects-li orange-dot">*/}
                    {/*<span className="todo-title">Blacklist</span>*/}
                    {/*<small className="text-grey m-xs-l">Host Count 4</small>*/}
                {/*</li>*/}
                {this.state.blacklistItems.map((item, index)=>{
                    return <Blacklist_listItem key={index} item={item} handleBlacklistItemClick={this.props.handleBlacklistItemClick}/>
                })}

                {/*<!-- End Project List -->*/}

                {/*<!-- Begin Project List -->*/}
                {/*<li data-todo-target="Blacklist-by-Mia" className="todo-projects-li red-dot">*/}
                    {/*<span className="todo-title">Blacklist by Mia</span>*/}
                    {/*<small className="text-grey m-xs-l">Host Count 101</small>*/}

                {/*</li>*/}
                {/*/!*<!-- End Project List -->*!/*/}

                {/*/!*<!-- Begin Project List -->*!/*/}
                {/*<li data-todo-target="Blacklist-24" className="todo-projects-li green-dot">*/}
                    {/*<span className="todo-title">Blacklist-24</span>*/}
                    {/*<small className="text-grey m-xs-l">Host Count 3422</small>*/}

                {/*</li>*/}
                {/*/!*<!-- End Project List -->*!/*/}


                {/*<li data-todo-target="Blacklist-23" className="todo-projects-li">*/}
                    {/*<span className="todo-title">Blacklist 23</span>*/}
                    {/*<small className="text-grey m-xs-l">Host Count 52</small>*/}

                {/*</li>*/}
                {/*/!*<!-- End Project List -->*!/*/}


                {/*<li></li>*/}
                {/*<!-- Begin Project List -->*/}

                {/*<!-- End Project List -->*/}
            </ul>
        )
    }
}
export default Blacklist_list;