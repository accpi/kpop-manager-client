import React from 'react'
import Radar from '../../../components/Radar'

function Component(props) {
    const data = {
        // Hack to add padding to data set labels
        labels: [[props.dataLabels[0], ''], [props.dataLabels[1], ''], ['', props.dataLabels[2]], ['', props.dataLabels[3]], [props.dataLabels[4], '']],
        datasets: [
            {
                label: props.title,
                backgroundColor: 'rgba(199, 0, 57, 0.2)',
                borderColor: 'rgba(199, 0, 57, 0.6)',
                pointStyle: 'circle',
                pointBackgroundColor: 'rgba(199, 0, 57, 0.5)',
                pointBorderColor: 'rgba(199, 0, 57, 0.8)',
                pointBorderWidth: 3,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(199, 0, 57, 0.8)',
                pointRadius: 5,
                lineTension: -0.12,
                data: [props.dataSet[0], props.dataSet[1], props.dataSet[2], props.dataSet[3], props.dataSet[4]]
            }
        ],
    };

    return (
        <div className="stat-panel panel-wrapper">
            <div className="radar">
                <Radar data={data} title={props.title} />
            </div>
            <div className="radar-table">
                <table>
                    <thead></thead>
                    <tbody>
                        {data.labels.map((label, index) => (
                            <tr key={index}>
                                <th>{label}</th>
                                <td>{data.datasets[0].data[index]}</td>
                            </tr>
                        ))}
                        <tr>
                            <th>Overall</th>
                            <td>{Math.round((data.datasets[0].data[0] + data.datasets[0].data[1] + data.datasets[0].data[2] + data.datasets[0].data[3] + data.datasets[0].data[4]) / 5)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Component