import { useEffect, useState } from 'react'
import CreateLoginForm from './components/CreateLoginForm'
import Conversation from './components/Conversation';
import axios from 'axios'
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [conversations, setConversations] = useState([])
  const [userText, setUserText] = useState('')//what the user types for new message
  const [edited, setEdited] = useState(false)
  const [isUser, setIsUser] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState('')

  useEffect(() => {

    getConversations()

  },[userId])

  const login = async (event) => {
    event.preventDefault()
    let res = await axios
    .post('http://localhost:3001/', {
      userName: userName,
      password: password
    })
    // setUserId(res.data)
    console.log(res.data)
    setUserId(res.data)
    
    .catch(function (error) {
      console.log(error)
    })
    
  }

  const getConversations = async (req, res) => {
    let threads = await axios
    .post('http://localhost:3001/myVoid', {
      user_ids: userId
    })
    setConversations(threads.data)

  }

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


  return (
    <div className="App">
      <h1>Void</h1>
      <Routes>
        <Route path='/' element={<CreateLoginForm
        userName={userName}
        password={password}
        handleUserNameChange={handleUserNameChange}
        handlePasswordChange={handlePasswordChange}
        login={login}
        />} />
        <Route path='myVoid'  element= {
          conversations.map((conversation)=> (
            <Conversation
            key={conversation.name}
            name={conversation.name} 
            userId={userId}
            />
          ))
            } />
      </Routes>
      
    </div>
  );
}

export default App;
