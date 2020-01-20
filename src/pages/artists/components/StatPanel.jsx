import React from 'react'
import Radar from '../../../components/Radar'

function Component(props) {

    const data = {
        // Hack to add padding to data set labels
        labels: [[props.dataLabels[0], ''], [props.dataLabels[1], ''], ['', props.dataLabels[2]], ['', props.dataLabels[3]], [props.dataLabels[4], '']],
        datasets: [
            {
                label: props.title,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointStyle: 'circle',
                pointBackgroundColor: 'rgba(255,99,132,0.5)',
                pointBorderColor: 'rgba(255,99,132,1)',
                pointBorderWidth: 3,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                pointRadius: 5,
                data: [props.dataSet[0], props.dataSet[1], props.dataSet[2], props.dataSet[3], props.dataSet[4]]
            }
        ],
    };


    return (
        <>
            <div style={{ width: 500, height: 300}}>
                <Radar data={data} title={props.title} />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <table>
                    <thead></thead>
                    <tbody>
                        {data.labels.map((label, index) => (
                            <tr key={index}>
                                <th style={{textAlign: 'left', paddingRight: '10px'}}>{label}</th>
                                <td>{data.datasets[0].data[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Component