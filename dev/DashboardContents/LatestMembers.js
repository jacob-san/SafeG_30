/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from "react";
import LatestMember from './LatestMember';
class LatestMembers extends Component{
    constructor(props){
        super(props);
        this.state = {
            latestmemb:[
                {id:1,name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {id:2,name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {id:3,name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {id:4,name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {id:5,name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {id:6,name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {id:7,name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {id:8,name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},

            ]
        }
    }
    render(){
        return(
            <div className="ui four column stackable grid dis-table">
                    {this.state.latestmemb.map((memb)=>{
                        return(
                            <LatestMember key={memb.id} name={memb.name} time={memb.time} img_src={memb.img_src}/>
                        );
                    })}
                <div className="ui middle aligned column centered grid">
                    <button className=" btn btn-black w-175 p-sm text-uppercase fs-lg ls-xs fw-thk btn-rounded">
                        VIEW ALL USERS
                    </button>
                </div>
            </div>
        );
    }
}
export default LatestMembers;