import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')
  const [conversations, setConversations] = useState([])
  const [userText, setUserText] = useState('')//what the user types for new message
  const [edited, setEdited] = useState(false)

  // useEffect(() => {

  // },[])

  const login = async (event) => {
    event.preventDefault()
    await axios
    .post('http://localhost:3001/login', {
      userName: userName,
      password: userPass
    })
    
  }


  return (
    <div className="App">
      {/* <CreateLoginForm /> */}
    </div>
  );
}

export default App;
