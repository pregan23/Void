import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Messages = (props) => {
    
    const [messages, setMessages] = useState([])
    const [newMessageText, setNewMessageText] = useState('')
    const [userText, setUserText] = useState('')
    const [messageId, setMessageId] = useState([])

    const { id, msg_id } = useParams()

    const getMessages = async () => {
        let correspondence = await axios
        .get(`http://localhost:3001/myVoid/${id}/${msg_id}`)
        setMessages(correspondence.data)
        // setMessageId(correspondence.data._id) 
    }

    const handleNewMessageTextChange = (event) => {
        setNewMessageText(event.target.value)
        
    }

    // const handleEditMessage = (event) => {
       
    // }


    const handleInputChange = (event) => {
        setUserText(event.target.value)
    }

    const editMessage = async (event) => {
        setMessageId(event.target._id)
        event.preventDefault()
        await axios
        .put(`http://localhost:3001/message/${msg_id}`,
       {
           _id: messageId,
           content: newMessageText
        }
        )

        getMessages()
    }

    const sendMessage = async (event) => {
        event.preventDefault()
        await axios
        .post(`http://localhost:3001/myVoid/${id}/new_message/${msg_id}`,
        {
            content: userText,
            author_id: id,
            conversation_id: msg_id
        }

        
        
        )
       
        getMessages()
        

    }

    useEffect(() => {

        getMessages()
    
      },[])

      return (
        <div>
        {messages.map((message)=> (
        <li key={message._id} className='messages'>
            <h3>{message.content}</h3>
            <form className='form-wrapper'  onSubmit={()=>{editMessage(message._id)}}>
            <input onChange={handleNewMessageTextChange}></input>
            <button type='submit'>Edit</button>
            </form>
        </li>
        ))}
        <form onSubmit={sendMessage}>
        <input onChange={handleInputChange}></input>
        <button type='submit' >Send</button>
        </form>        
        </div>
      )



}

export default Messages