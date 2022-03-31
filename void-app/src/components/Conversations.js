import { useEffect, useState } from 'react'
import axios from 'axios'

const Conversations = (props) => {

    const [conversations, setConversations] = useState([])

    const getConversations = async (req, res) => {
        let threads = await axios
        .get('http://localhost:3001/myVoid')
        console.log(threads.data)
        setConversations(threads.data)
    
      }
    
    useEffect(() => {

        getConversations()
    
      },[])

    

    

    return(
        <li className='conversations'>
            <h3>{props.name}</h3>
        </li>
    )
}

export default Conversations