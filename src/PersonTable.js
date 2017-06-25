import React, {Component} from "react";
import pf from "./personFactory";
import {observer} from "mobx-react";

@observer
class PersonTable extends Component {

    render() {
        console.log(pf.persons.length, "mtfvtfvtvtf")
        var rows = pf.persons.map((p) =>  {
            return (

                <tr key={p._id}>
                    <td>{p.age}</td>
                    <td>{p.name}</td>
                    <td>{p.gender}</td>
                    <td>{p.email}</td>
                    <td>{p.friends.map((friend) =>{
                    return(
                        <p key={friend.id}> {friend.name}</p>)})
                    }</td>
                    <td>{p.friends.length}</td>

                </tr>
            )
        })

        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Age</th>
                    <th>name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Friends</th>
                </tr>
                </thead>

                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
}
export default PersonTable;