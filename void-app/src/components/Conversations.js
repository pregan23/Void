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

    const handleClick = (msgId) => {
        navigate(`threads/${msgId}`)
    }

    const getSecondId = async () => {
        let userId = await axios
        .get(`http://localhost:3001/myVoid/${id}/search/${otherUser}`)
        console.log(userId)
    }

    const deleteConversation = async (id) => {

        await axios 
        .delete(`http://localhost:3001/myVoid/${id}`)
        console.log('deleted')
        getConversations()

        
    }

    const getConversations = async () => {
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
            <h3 onClick={() =>handleClick(conversation._id)} >{conversation.name}</h3>
            <button onClick={() => deleteConversation(conversation._id)} >Delete</button>

            

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