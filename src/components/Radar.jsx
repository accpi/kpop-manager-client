import React from 'react'
import {Radar} from 'react-chartjs-2';

function Component(props) {
    return (
        <Radar 
            data={props.data}
            options={{ 
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: props.title
                        },
                        legend: {
                            display: false
                        },
                        scale: {
                            angleLines: {
                                display: false
                            },
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 100,
                            }
            }
        }} />
    )
}

export default Component