import React from 'react'
import {Radar} from 'react-chartjs-2'
require('chartjs-plugin-datalabels')

function Component(props) {
    return (
        <Radar 
            data={props.data}
            options={{ 
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: props.title,
                            fontSize: 20,
                            fontColor: 'black'
                        },
                        legend: {
                            display: false,
                        },
                        scale: {
                            angleLines: {
                                display: false,
                            },
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 100,
                                display: false,
                                stepSize: 20
                            },
                            pointLabels: {
                                fontSize: 16,
                                fontColor: 'black'
                            },
                        },
                        plugins: {
                            datalabels: {
                                anchor: 'center',
                                align: 'end',
                                font: {
                                    weight: "bold"
                                }
                            }
                        }
        }} />
    )
}

export default Component