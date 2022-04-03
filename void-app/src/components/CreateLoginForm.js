import React from 'react'


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
                    <button type="submit">Enter</button>               
                </div>
            </form>
        </div>
    )
}

export default CreateLoginForm