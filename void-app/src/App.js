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
  const [isUser, setIsUser] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect(() => {

  // },[])

  const login = async (event) => {
    event.preventDefault()
    let res = await axios
    .post('http://localhost:3001/', {
      userName: userName,
      password: password
    })
    console.log(res.data)
    .catch(function (error) {
      console.log(error)
    })
    
  }

  // const getConversations = async (req, res, id) => {
  //   let threads = await axios
  //   .post('http://localhost:3001/myVoid', {
  //     user_id: id
  //   })
  //   console.log(threads)

  // }

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


  return (
    <div className="App">
      <h1>Void</h1>
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
