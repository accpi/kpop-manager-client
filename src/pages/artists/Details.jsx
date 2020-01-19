import React from 'react'
import { useParams } from 'react-router-dom'
import StatPanel from './components/StatPanel'

const artist = {
    first_name: 'Nelson',
    stage_name: 'accpi',
    last_name: 'Kim',
    birthday: 'Sep. 8, 1994',
    group: 'star cat cafe'
}

const data = {
    labels: [['Pretty', ''], ['Sexy', ''], ['', 'Elegant'], ['', 'Cool'], ['Cute', '']],
    datasets: [
        {
            label: 'Visuals',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointStyle: 'circle',
            pointBackgroundColor: 'rgba(255,99,132,0.5)',
            pointBorderColor: 'rgba(255,99,132,1)',
            pointBorderWidth: 3,
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            pointRadius: 5,
            data: [100, 100, 100, 100, 100]
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
                <StatPanel data={data} title={'Visuals'} />
                <StatPanel data={data} title={'Vocals'} />             
            </div>
        </>
    )
}

export default Component