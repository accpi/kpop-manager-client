import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import GroupList from './components/GroupList'
import Create from './components/CreateGroup'

function Component(props) {
    const [groups, setGroups] = useState(null)
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

    if (pageLoad && groups) {
        return (
            <div className="container">
                <Header title={'Groups'} />
                <GroupList groups={groups} />
                <Create />
            </div>
        )
    }
    else {
        return (
            <>
                <Header title={'Groups'} />
                <h1>Loading</h1>
            </>
        )
    }
}

export default Component