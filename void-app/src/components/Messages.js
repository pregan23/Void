import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Messages = (props) => {
    
    const [messages, setMessages] = useState([])
    const [userText, setUserText] = useState('')

    const { id, msg_id } = useParams()

    const getMessages = async () => {
        let correspondence = await axios
        .get(`http://localhost:3001/myVoid/${id}/${msg_id}`)
        setMessages(correspondence.data) 
    }

    const handleInputChange = (event) => {
        setUserText(event.target.value)
    }

    const sendMessage = async () => {
        await axios
        .post(`http://localhost:3001/myVoid/${id}/thread/${msg_id}`,
        {
            content: userText,
            author_id: id,
            conversation_id: msg_id
        }
        .then(function (response) {
            getMessages()
          })
          .catch(function (error) {
            console.log(error)
          })
        )
       
        
        

    }

    useEffect(() => {

        getMessages()
    
      },[messages])

      return (
        <div>
        {messages.map((message)=> (
        <li key={message._id} className='messages'>
            <h3>{message.content}</h3>
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