import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Route, Routes, useNavigate } from 'react-router-dom'

const Conversations = (props) => {

    const [conversations, setConversations] = useState([])
    const [otherUser, setOtherUser] = useState('')
    let { id } = useParams()
    const navigate = useNavigate()

    const handleSecondParty = (event) => {
        setOtherUser(event.target.value) 
    }

    const getSecondId = async (req, res) => {
        let userId = await axios
        .get(`http://localhost:3001/myVoid/${id}/search/${otherUser}`)
        console.log(userId)
    }

    const createConversation = async (req, res) => {
        
    }

    const getConversations = async (req, res) => {
        let threads = await axios
        .get(`http://localhost:3001/myVoid/${id}`)
        // console.log(threads.data)
        setConversations(threads.data)
    
      }
      
    
    useEffect(() => {

        getConversations()
    
      },[])

    

    

    return(
        <div>
        {conversations.map((conversation)=> (
        <li key={conversation._id} className='conversations'>
            <h3  >{conversation.name}</h3>

            {/* onClick={navigate()} */}

        </li>
        ))}
        <form onSubmit={getSecondId} className='form-wrapper'>
            <h3>To start a new conversation, enter the username of the person you'd like to talk to.</h3>
            <input onChange={handleSecondParty}></input>
            <button type="submit">Submit</button>
        </form>

        </div>
    )
}

export default Conversations