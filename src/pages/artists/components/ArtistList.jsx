import React from 'react'
import {Link} from 'react-router-dom'

var moment = require('moment');
moment().format();
moment.defaultFormat = "MMMM D, YYYY";

function Component(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Stage Name</th>
                    <th>Name</th>
                    <th>Group</th>
                    <th>Sex</th>
                    <th>Birthplace</th>
                    <th>Age</th>
                    <th>Overall</th>
                    <th>Visuals</th>
                    <th>Vocals</th>
                    <th>Dance</th>
                    <th>Personality</th>
                    <th>Morale</th>
                    <th>Stamina</th>
                    <th>Writing</th>
                    <th>Choreo.</th>
                    <th>Composition</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.artists ?
                    props.artists.map((artist, index) => (
                        <tr key={index}>
                            <td><Link to={`/artists/${ artist.id }`}>{artist.stage_name}</Link></td>
                            <td>{artist.first_name} {artist.last_name}</td>
                            <td>{artist.group_name ? artist.group_name : 'N/A'}</td>
                            <td>{artist.sex = 1 ? 'Male' : 'Female'}</td>
                            <td>{artist.city}, {artist.country}</td>
                            <td>{moment(artist.birthday).format()}</td>
                            <td>10</td>
                            <td>{(artist.pretty + artist.cool + artist.cute + artist.elegant + artist.sexy) / 5}</td>
                            <td>{(artist.breathing + artist.diction + artist.range + artist.control + artist.empathy) / 5}</td>
                            <td>{(artist.balance + artist.posture + artist.coordination + artist.flexibility + artist.strength) / 5}</td>
                            <td>{(artist.funny + artist.cuteness + artist.engaging + artist.outgoing + artist.pleasant) / 5}</td>
                            <td>{artist.morale}</td>
                            <td>{artist.stamina}</td>
                            <td>{artist.songwriting}</td>
                            <td>{artist.choreography}</td>
                            <td>{artist.composition}</td>
                        </tr>
                    )) :
                    null
                }
            </tbody>
        </table>
    )
}

export default Component