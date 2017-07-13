/**
 * Created by sandeepj on 29/6/17.
 */
import React, {Component} from "react";
class UserRow extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <tr>
                <td>{this.props.ind+1}</td>
                <td>{this.props.user.fullName}</td>
                <td><code>{this.props.user.email}</code></td>
                <td><h5 className="m-n fw-thk text-danger"><i
                className="fa fa-edit text-success m-xs-r fa-fw"></i>
                    <a className="text-black" onClick={()=>{this.props.handleEditClick(this.props.user)}}>Edit</a>
                    <i className="fa fa-trash m-xs-r fa-fw "></i>
                    <a  className="text-black" onClick={()=>{this.props.handleDeleteClick(this.props.user.userId)}}>Delete</a>
                </h5><h5 className="m-n fw-thk text-danger"></h5></td>
                </tr>

        )
    }
}
export default UserRow;