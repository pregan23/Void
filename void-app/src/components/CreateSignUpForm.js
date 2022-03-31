import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CreateSignUpForm = (props) => {

    const [newUserName, setNewUserName] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleNewUserNameChange = (event) => {
        setNewUserName(event.target.value)
    }

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value)
    }



    return (
        <div className = "form-wrapper">
        <br/>
        <h3>Create an account below. Type carefully!</h3>
        <form onSubmit={props.signup}>
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