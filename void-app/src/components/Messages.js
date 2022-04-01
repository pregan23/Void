import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Messages = (props) => {
    
    const [messages, setMessages] = useState([])
    const [userText, setUserText] = useState('')
    const [messageId, setMessageId] = useState([])

    const { id, msg_id } = useParams()

    const getMessages = async () => {
        let correspondence = await axios
        .get(`http://localhost:3001/myVoid/${id}/${msg_id}`)
        setMessages(correspondence.data)
        // setMessageId(correspondence.data._id) 
    }

    const handleInputChange = (event) => {
        setUserText(event.target.value)
    }

    const editMessage = async () => {
        await axios .put(`http://localhost:3001/message/62470449c2b054a90622ac32`,
       
        {content: userText}
        )
    }

    // const sendMessage = async () => {
    //     await axios
    //     .post(`http://localhost:3001/myVoid/${id}/thread/${msg_id}`,
    //     {
    //         content: userText,
    //         author_id: id,
    //         conversation_id: msg_id
    //     }
    //     .then(function (response) {
    //         getMessages()
    //       })
    //       .catch(function (error) {
    //         console.log(error)
    //       })
    //     )
       
        
        

    // }

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
        <form onSubmit={editMessage}>
        <input onChange={handleInputChange}></input>
        <button type='submit' >Edit</button>
        </form>        
        </div>
      )



}

export default Messages