import React from 'react'
import {Link} from 'react-router-dom'

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function Component(props) {
    return (
        <div className="panel-wrapper">
            <table className="striped-table">
                <thead>
                    <tr>
                        <th>Stage Name</th>
                        <th>Name</th>
                        <th>Group</th>
                        <th>Sex</th>
                        <th>Age</th>
                        <th>City</th>
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
                                <td>{getAge(artist.birthday)}</td>
                                <td>{artist.city}, {artist.country}</td>
                                <td>{Math.round((artist.pretty + artist.cool + artist.cute + artist.elegant + artist.sexy + 
                                    artist.breathing + artist.diction + artist.range + artist.control + artist.empathy + 
                                    artist.balance + artist.posture + artist.coordination + artist.flexibility + artist.strength +
                                    artist.funny + artist.cuteness + artist.engaging + artist.outgoing + artist.pleasant) / 20)}</td>
                                <td>{Math.round((artist.pretty + artist.cool + artist.cute + artist.elegant + artist.sexy) / 5)}</td>
                                <td>{Math.round((artist.breathing + artist.diction + artist.range + artist.control + artist.empathy) / 5)}</td>
                                <td>{Math.round((artist.balance + artist.posture + artist.coordination + artist.flexibility + artist.strength) / 5)}</td>
                                <td>{Math.round((artist.funny + artist.cuteness + artist.engaging + artist.outgoing + artist.pleasant) / 5)}</td>
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
        </div>
    )
}

export default Component