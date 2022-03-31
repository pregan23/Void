import { useEffect, useState } from 'react'
import CreateLoginForm from './components/CreateLoginForm'
import Conversations from './components/Conversations';
import axios from 'axios'
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [userText, setUserText] = useState('')//what the user types for new message
  const [edited, setEdited] = useState(false)
  const [isUser, setIsUser] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  

  const login = async (event) => {
    event.preventDefault()
    let res = await axios
    .post('http://localhost:3001/', {
      userName: userName,
      password: password
    })
    // setUserId(res.data)
    // console.log(res.data)
    setUser(res.data)
    navigate(`/myVoid/${res.data._id}`)

    .catch(function (error) {
      console.log(error)
    })
    
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
        <Route path='myVoid/:id'  element= {
          // conversations.map((conversation)=> (
            <Conversations
            user={user}
            />
          // ))
            } />
      </Routes>
      
    </div>
  );
}

export default App;
