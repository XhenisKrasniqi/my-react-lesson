import React, { useState } from 'react'



function Form() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e){
    e.preventDefault()
        setError(
        firstName === ""
            ? "Name is required"
            : lastName === ""
            ? "Lastname is required"
            : ""
        )
    }


  return (
    <div>
            <form onSubmit={handleSubmit}>
        <input type="text"
         value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        <input type="text"
         value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
        <input type="email"
         value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"
         value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="Submit">
            create
        </button>
        <p>{error}</p>
    </form>

    <p>First name: {firstName}</p>
    <p>Last name: {lastName}</p>
    <p>Email: {email}</p>
    <p>Password: {password}</p>


    </div>

  )
}

export default Form