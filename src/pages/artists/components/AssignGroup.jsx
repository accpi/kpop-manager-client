import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Component(props) {
    const [artist, setArtist] = useState(props.artist_id)
    const [groups, setGroups] = useState()
    const [selectValue, setSelectValue] = useState(0)

    const [pageLoad, setPageLoad] = useState(false)

    useEffect(() => {
        if (!pageLoad) {
            axios.get('http://localhost:3000/groups/user/1')
            .then(response => {
                if (response.data) {
                    setGroups(response.data)
                    setPageLoad(true)
                }
            })
            .catch(error => (
                console.log(error)
            )) 
        }
    })

    const handleSubmit = (event) => {
        if (event) {
            if (selectValue === 0) {
                event.preventDefault()
            }
            else {
                axios.put('http://localhost:3000/artists/group/' + artist, {
                    group_id: selectValue
                })
                .then(response => {
                    console.log(response)
                })
                .catch(error => (
                    console.log(error)
                ))
            }
        }
    }

    if (pageLoad && groups) {
        return (
            <div>
                <h3>Assign Group</h3>
                <form>
                    <select value={selectValue} onChange={e => setSelectValue(Number(e.target.value))}>
                        <option key={0} value={0}>
                            Select Group
                        </option>
                        {groups.map(group => (
                            <option key={group.id} value={group.id}>
                                {group.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleSubmit}>Assign</button>
                </form>
            </div>
        )
    }
    else {
        return (
            null
        )
    }


}

export default Component