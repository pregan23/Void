import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Conversations = (props) => {

    const [conversations, setConversations] = useState([])
    let { id } = useParams()

    const getConversations = async (req, res) => {
        let threads = await axios
        .get(`http://localhost:3001/myVoid/${id}`)
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