import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import StatPanel from './components/StatPanel'
import axios from 'axios'

var moment = require('moment');
moment().format();
moment.defaultFormat = "MMMM D, YYYY";

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

function Component() {
    let { id } = useParams();
    const [artist, setArtist] = useState(null)
    const [pageLoad, setPageLoad] = useState(false)

    useEffect(() => {
        if (!pageLoad) {
            axios.get('http://localhost:3000/artists/full/' + id)
            .then(response => {
                if (response.data) {
                    setArtist(response.data)
                    setPageLoad(true)
                }
            })
            .catch(error => (
                console.log(error)
            )) 
        }
    })

    if (pageLoad && artist) {
        return (
            <>
                <div style={{ margin: '0 auto', width: '100%'}}>
                    <div id='artist-info-bar' style={{ margin: '20px auto' }}>
                        <h4 style={{ margin: '0 auto', fontSize: 35, fontWeight: 500 }}>{artist.info.stage_name}{artist.group.name ? 
                                                                        ', ' + artist.group.name : 
                                                                        null} 
                        </h4>
                        <h5 style={{ margin: '0 auto', fontSize: 18, fontWeight: 500}}>{artist.info.first_name} {artist.info.last_name}, {getAge(artist.info.birthday)} ({moment(artist.info.birthday).format()})</h5>
                        <h5 style={{ margin: '0 auto', fontSize: 18, fontWeight: 400}}>{artist.info.city}, {artist.info.country}</h5>
                    </div>
                
                    <div id='artist-stat-summary-bar' style={{ margin: '20px auto' }}>
                        <div>
                            <table style={{ margin: '0 auto' }}>
                                <thead>
                                    <tr>
                                        <th>Overall</th>
                                        <th>Visuals</th>
                                        <th>Vocals</th>
                                        <th>Dance</th>
                                        <th>Personality</th>
                                        <th>Stamina</th>
                                        <th>Morale</th>
                                        <th>Songwriting</th>
                                        <th>Choreography</th>
                                        <th>Composition</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{(artist.visuals.pretty + artist.visuals.sexy + artist.visuals.cute + artist.visuals.elegant + artist.visuals.cool + 
                                            artist.vocals.breathing + artist.vocals.diction + artist.vocals.range + artist.vocals.control + artist.vocals.empathy + 
                                            artist.dance.balance + artist.dance.posture + artist.dance.coordination + artist.dance.flexibility + artist.dance.strength + 
                                            artist.dance.balance + artist.dance.posture + artist.dance.coordination + artist.dance.flexibility + artist.dance.strength) / 20}</td>
                                        <td>{(artist.visuals.pretty + artist.visuals.sexy + artist.visuals.cute + artist.visuals.elegant + artist.visuals.cool) / 5}</td>
                                        <td>{(artist.vocals.breathing + artist.vocals.diction + artist.vocals.range + artist.vocals.control + artist.vocals.empathy) / 5}</td>
                                        <td>{(artist.dance.balance + artist.dance.posture + artist.dance.coordination + artist.dance.flexibility + artist.dance.strength) / 5}</td>
                                        <td>{(artist.personality.funny + artist.personality.cuteness + artist.personality.engaging + artist.personality.outgoing + artist.personality.pleasant) / 5}</td>
                                        <td>{artist.intangibles.stamina}</td>
                                        <td>{artist.intangibles.morale}</td>
                                        <td>{artist.intangibles.songwriting}</td>
                                        <td>{artist.intangibles.choreography}</td>
                                        <td>{artist.intangibles.composition}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '50px', width: '100%' }}>
                        <StatPanel title={'Visuals'} 
                            dataSet={[artist.visuals.pretty, artist.visuals.sexy, artist.visuals.cute, artist.visuals.elegant, artist.visuals.cool]}
                            dataLabels={['Pretty', 'Sexy', 'Cute', 'Elegant', 'Cool']}
                        />
                        <StatPanel title={'Vocals'}
                            dataSet={[artist.vocals.breathing, artist.vocals.diction, artist.vocals.range, artist.vocals.control, artist.vocals.empathy]}
                            dataLabels={['Breathing', 'Diction', 'Range', 'Control', 'Emotion']}
                        />             
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '50px', width: '100%' }}>
                        <StatPanel title={'Dance'} 
                            dataSet={[artist.dance.balance, artist.dance.posture, artist.dance.coordination, artist.dance.flexibility, artist.dance.strength]}
                            dataLabels={['Balance', 'Posture', 'Coordination', 'Flexibility', 'Strength']}
                        />
                        <StatPanel title={'Personality'}
                            dataSet={[artist.personality.funny, artist.personality.cuteness, artist.personality.engaging, artist.personality.outgoing, artist.personality.pleasant]}
                            dataLabels={['Funny', 'Ageyo', 'Engaging', 'Outgoing', 'Pleasant']}
                        />             
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '50px', width: '100%' }}>
                        <StatPanel title={'Intangibles/Skills'} 
                            dataSet={[artist.intangibles.stamina, artist.intangibles.morale, artist.intangibles.composition, artist.intangibles.songwriting, artist.intangibles.choreography]}
                            dataLabels={['Stamina', 'Morale', 'Composition', 'Songwriting', 'Choreography']}
                        />           
                    </div>
                </div>
                
            </>
          )
    }
    else {
        return (
            <p>Loading</p>
        )
    }
}

export default Component