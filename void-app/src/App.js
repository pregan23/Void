import { useEffect, useState } from 'react'
import CreateLoginForm from './components/CreateLoginForm'
import axios from 'axios'
import './App.css';

function App() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [conversations, setConversations] = useState([])
  const [userText, setUserText] = useState('')//what the user types for new message
  const [edited, setEdited] = useState(false)

  // useEffect(() => {

  // },[])

  const login = async (event) => {
    event.preventDefault()
    await axios
    .post('http://localhost:3001/', {
      userName: userName,
      password: password
    })
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
      <CreateLoginForm
      userName={userName}
      password={password}
      handleUserNameChange={handleUserNameChange}
      handlePasswordChange={handlePasswordChange}
      login={login}
      />
    </div>
  );
}

export default App;
