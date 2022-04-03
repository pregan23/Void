import React from 'react'
// import { useNavigate,Link } from 'react-router-dom'

const CreateLoginForm = (props) => {
    return (
        <div className = "form-wrapper">
            <br/>
            <h3>Log in below.  If you do not yet have an account, simply click submit.</h3>
            <form onSubmit={props.login}>
                <div>
                    <label>Username:</label>
                    <input 
                    type="text"
                    value={props.userName}
                    placeholder="Enter Username..."
                    onChange={props.handleUserNameChange}                    
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                    type="text"
                    value={props.password}
                    placeholder="Enter Password..."
                    onChange={props.handlePasswordChange}                    
                    />
                </div>
                <div className="button-wrapper">
                    {/* <Link to={'/myVoid'}> */}
                    <button type="submit">Enter</button>
                    {/* </Link> */}
                </div>
            </form>
        </div>
    )
}

export default CreateLoginForm