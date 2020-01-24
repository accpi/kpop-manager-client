import React from 'react'
import {Link} from 'react-router-dom'

function Component(props) {
    return (
        <div className="panel-wrapper">
            <table className="striped-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Fan Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.groups ?
                        props.groups.map((group, index) => (
                            <tr key={index}>
                                <td><Link to={`/groups/${group.id}`}>{group.name}</Link></td>
                                <td>{group.fan_name}</td>
                            </tr>
                        )) :
                        null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Component