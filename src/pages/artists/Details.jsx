import React from 'react'
import { useParams } from 'react-router-dom'
import Radar from '../../components/Radar'

const artist = {
    first_name: 'Nelson',
    stage_name: 'accpi',
    last_name: 'Kim',
    birthday: 'Sep. 8, 1994',
    group: 'star cat cafe'
}

const data = {
    labels: ['Pretty', 'Sexy', 'Elegant', 'Cool', 'Cute'],
    datasets: [
        {
            label: 'Visuals',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 90, 81, 56]
        }
    ],
};

function Component() {
    let { id } = useParams();

    return (
        <>
            <div id='artist-info-bar'>
                <h4>{artist.stage_name}{artist.group ? 
                                          ', ' + artist.group : 
                                           null } 
                </h4>
                <h5>{artist.first_name} {artist.last_name}</h5>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{ width: 500, height: 300}}>
                    <Radar data={data} title={"Visuals"} />
                </div>
                <div style={{ width: 500, height: 300}}>
                    <Radar data={data} title={"Vocals"} />
                </div> 
                <div style={{ width: 500, height: 300}}>
                    <Radar data={data} title={"Dance"} />
                </div>
                <div style={{ width: 500, height: 300}}>
                    <Radar data={data} title={"Personality"} />
                </div> 
                <div style={{ width: 500, height: 300}}>
                    <Radar data={data} title={"Intangibles"} />
                </div>               
            </div>
        </>
    )
}

export default Component