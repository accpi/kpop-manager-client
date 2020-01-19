import React from 'react'
import Radar from '../../../components/Radar'

function Component(props) {
    return (
        <>
            <div style={{ width: 500, height: 300}}>
                <Radar data={props.data} title={props.title} />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <table>
                    <thead></thead>
                    <tbody>
                        {props.data.labels.map((label, index) => (
                            <tr>
                                <th style={{textAlign: 'left', paddingRight: '10px'}}>{label}</th>
                                <td>{props.data.datasets[0].data[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Component