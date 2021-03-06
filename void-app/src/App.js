import { useEffect, useState } from 'react'
import CreateLoginForm from './components/CreateLoginForm'
import CreateSignUpForm from './components/CreateSignUpForm';
import Conversations from './components/Conversations';
import Messages from './components/Messages'
import axios from 'axios'
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState('')
  const navigate = useNavigate()

  

  const login = async (event) => {
    event.preventDefault()
    let res = await axios
    .post('http://localhost:3001/', {
      userName: userName,
      password: password
    })
    if(!!res.data) {
      console.log(res)

      setUser(res.data)
      navigate(`/myVoid/${res.data._id}`)
    }
    else {
      navigate('/signup')
    }
       
    
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
        <Route path='signup' element={<CreateSignUpForm 


        
        />} />
        <Route path='myVoid/:id'  element= {
          
            <Conversations
            user={user}
            />
   
            } />

        <Route path='myVoid/:id/threads/:msg_id' element= {
          
            <Messages 
            user={user}

          />
        } />
        
      </Routes>
      
    </div>
  );
}

export default App;
