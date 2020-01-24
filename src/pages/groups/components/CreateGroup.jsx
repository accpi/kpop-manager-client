import React, {useState} from 'react'
import axios from 'axios'
import Modal from 'react-modal';
Modal.setAppElement('#root')

function Component() {
    const [modalOpen, setModalOpen] = useState(false)

    function OpenModal() {
        setModalOpen(true)
    }

    function CloseModal() {
        setModalOpen(false)
    }

    const [name, setName] = useState('')
    const [fanName, setFanName] = useState('')

    const handleSubmit = e => {
        axios.post('http://localhost:3000/groups', {
            user_id: 1,
            name: name,
            fan_name: fanName
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <button onClick={OpenModal}>Create</button>
            <Modal
                isOpen={modalOpen}
                onRequestClose={CloseModal}
                contentLabel="Create Group"
            >
                <form>
                    <table>
                        <thead />
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td><input type="text" required value={name} onChange={e => setName(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <th>Fan Group Name</th>
                                <td><input type="text" required value={fanName} onChange={e => setFanName(e.target.value)} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleSubmit}>Create Group</button>
                </form>
            </Modal>
        </div>
    )
}

export default Component