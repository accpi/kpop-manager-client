import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ArtistList from './components/ArtistList'

function Component(props) {
    const [artists, setArtists] = useState(null)
    const [pageLoad, setPageLoad] = useState(false)

    useEffect(() => {
        if (!pageLoad) {
            axios.get('http://localhost:3000/artists/user/1')
            .then(response => {
                if (response.data) {
                    setArtists(response.data)
                    setPageLoad(true)
                }
            })
            .catch(error => (
                console.log(error)
            )) 
        }
    })

    if (pageLoad && artists) {
        return (
            <>
                <Header title={'Artists'} />
                <ArtistList artists={artists} />
                <Footer />
            </>
        )
    }
    else {
        return (
            <>
                <Header title={'Artists'} />
                <h1>Loading</h1>
                <Footer />
            </>
        )
    }
}

export default Component