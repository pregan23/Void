import { useEffect, useState } from 'react'
import axios from 'axios'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const CreateSignUpForm = (props) => {

    const [newUserName, setNewUserName] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const navigate = useNavigate()

    const handleNewUserNameChange = (event) => {
        setNewUserName(event.target.value)
    }

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value)
    }

    const signUp = async (event) => {
        event.preventDefault()
        let newUser = await axios
        .post('http://localhost:3001/signup', {
          userName: newUserName,
          password: newPassword
        })
        navigate(`/`)
        // navigate(`/myVoid/${newUser.data._id}`)
        
    }



    return (
        <div className = "form-wrapper">
        <br/>
        <h3>Create an account below. Type carefully!</h3>
        <form onSubmit={signUp}>
            <div>
                <label>Username:</label>
                <input 
                type="text"
                value={newUserName}
                placeholder="Choose Username..."
                onChange={handleNewUserNameChange}                    
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                type="text"
                value={newPassword}
                placeholder="Choose Password..."
                onChange={handleNewPasswordChange}                    
                />
            </div>
            <div className="button-wrapper">
                
                <button type="submit">Submit</button>
                
            </div>
        </form>
    </div>
    )


}

export default CreateSignUpForm