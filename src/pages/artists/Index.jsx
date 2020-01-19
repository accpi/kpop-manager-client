import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import axios from 'axios'

function ArtistIndex() {
    axios.get('http://localhost:3000/users')
    .then(response => {
        console.log(response.data)
        return (
            <div><p>RETURN</p></div>
        )
        /*
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
        */
    })
    .catch(error => {
        console.log(error)
        return <div><p>Error</p></div>
    })

    return <div><p>NULL</p></div>
}


function Component(props) {
    return (
        <>
            <Header title={'Artists'} />
            <ArtistIndex />
            <Footer />
        </>
    )
}

export default Component