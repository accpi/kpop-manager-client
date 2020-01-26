import React, {useState} from 'react'
import axios from 'axios'

function Component(props) {
    const [artist] = useState(props.artist_id)

    const handleSubmit = (event) => {
        if (event) {
            axios.put('http://localhost:3000/artists/group/remove/' + artist)
            .then(response => {
                console.log(response)
            })
            .catch(error => (
                console.log(error)
            ))
        }
    }

    return (
        <div>
            <h3>Assign Group</h3>
            <form>
                <button onClick={handleSubmit}>Remove from Group</button>
            </form>
        </div>
    )
}

export default Component