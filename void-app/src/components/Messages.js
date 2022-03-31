import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Messages = (props) => {
    
    const [messages, setMessages] = useState([])
    const [userText, setUserText] = useState('')

    let { id, msg_id } = useParams()

    const getMessages = async (req, res) => {
        let correspondence = await axios
        .get(`http://localhost:3001/myVoid/${id}/${msg_id}`)
        setMessages(correspondence.data) 
    }

    const handleInputChange = (event) => {
        setUserText(event.target.value)
    }

    const sendMessage = async (req, res) => {
        

    }

    useEffect(() => {

        getMessages()
    
      },[])

      return (
        <div>
        {messages.map((message)=> (
        <li key={message._id} className='messages'>
            <h3>{message.content}</h3>
        </li>
        ))}
        <form onSubmit={sendMessage}>
        <input onChange={handleInputChange}></input>
        <button type='submit' ></button>
        </form>        
        </div>
      )



}

export default Messages