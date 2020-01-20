import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import StatPanel from './components/StatPanel'
import axios from 'axios'

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
                <div id='artist-info-bar'>
                    <h4>{artist.info.stage_name}{artist.group.name ? 
                                                                    ', ' + artist.group.name : 
                                                                    ', unaffiliated'} 
                    </h4>
                    <h5>{artist.info.first_name} {artist.info.last_name}</h5>
                </div>

                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <StatPanel title={'Visuals'} 
                        dataSet={[artist.visuals.pretty, artist.visuals.sexy, artist.visuals.cute, artist.visuals.elegant, artist.visuals.cool]}
                        dataLabels={['Pretty', 'Sexy', 'Cute', 'Elegant', 'Cool']}
                    />
                    <StatPanel title={'Vocals'}
                        dataSet={[artist.vocals.breathing, artist.vocals.diction, artist.vocals.range, artist.vocals.control, artist.vocals.empathy]}
                        dataLabels={['Breath Control', 'Diction', 'Range', 'Control', 'Emotion']}
                    />             
                </div>

                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <StatPanel title={'Dance'} 
                        dataSet={[artist.dance.balance, artist.dance.posture, artist.dance.coordination, artist.dance.flexibility, artist.dance.strength]}
                        dataLabels={['Balance', 'Posture', 'Coordination', 'Flexibility', 'Strength']}
                    />
                    <StatPanel title={'Personality'}
                        dataSet={[artist.personality.funny, artist.personality.cuteness, artist.personality.engaging, artist.personality.outgoing, artist.personality.pleasant]}
                        dataLabels={['Funny', 'Ageyo', 'Engaging', 'Outgoing', 'Pleasant']}
                    />             
                </div>

                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <StatPanel title={'Intangibles/Skills'} 
                        dataSet={[artist.intangibles.stamina, artist.intangibles.morale, artist.intangibles.composition, artist.intangibles.songwriting, artist.intangibles.choreography]}
                        dataLabels={['Stamina', 'Morale', 'Composition', 'Songwriting', 'Choreography']}
                    />           
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