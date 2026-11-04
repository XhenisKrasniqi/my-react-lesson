
import React, { useState } from 'react'
import "../App.css"

function RegisterForm() {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [course, setCourse] = useState("");
    const [accepted, setAccepted] = useState(false);
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};


        if (name.trim() === "") {
            newErrors.name = "Name is required";
        } else if (name.trim().length <= 2) {
            newErrors.name = "Name must be more than 2 characters";
        } else if (name.includes(" ")) {
            newErrors.name = "Name must not contain spaces";
        }


        if (lastname.trim() === "") {
            newErrors.lastname = "Last name is required";
        } else if (lastname.trim().length <= 2) {
            newErrors.lastname = "Last name must be more than 2 characters";
        } else if (lastname.includes(" ")) {
            newErrors.lastname = "Last name must not contain spaces";
        }


        if (email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (!email.includes("@")) {
            newErrors.email = "Email must contain @";
        }


        if (password === "") {
            newErrors.password = "Password is required";
        } else if (password.length <= 6) {
            newErrors.password = "Password must be more than 6 characters";
        } else if (!/[0-9]/.test(password)) {
            newErrors.password = "Password must contain a number";
        } else if (!/[A-Z]/.test(password)) {
            newErrors.password = "Password must contain an uppercase letter";
        }


        if (!accepted) {
            newErrors.accepted = "You must accept the terms and conditions";
        }

        setErrors(newErrors);


        if (Object.keys(newErrors).length > 0) {
            return;
        }

        console.log(name, lastname, email, password, course, accepted);

        setName("");
        setLastname("");
        setEmail("");
        setPassword("");
        setCourse("");
        setAccepted(false);
        setErrors({});
    }

  return (
    <div className='form-container'>
        <h2>Register Form</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="">First Name</label>
                <input type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name}
                id='name'/>
                <p style={{ color: "red" }}>{errors.name}</p>
            </div>
            
            <div className='form-control'>
                <label htmlFor="">Last Name</label>
                <input type="text" 
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                id='lastname'/>
                <p style={{ color: "red" }}>{errors.lastname}</p>
            </div>

            <div className='form-control'>
                <label htmlFor="">Email</label>
                <input type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id='email'/>
                <p style={{ color: "red" }}>{errors.email}</p>
            </div>
            <div className='form-control'>
                <label htmlFor="">Password</label>
                <input type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id='password'/>
                <p style={{ color: "red" }}>{errors.password}</p>
            </div>
            <div className='form-control'>
                <label htmlFor="">Course</label>
                <select                    
                    id="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                >
                    <option value="">Select Course</option>
                    <option value="html">Html</option>
                    <option value="html">Css</option>
                    <option value="html">JavaScript</option>
                    
                </select>
            </div>
            <div className='form-control'>
                <label htmlFor="">Accept terms and conditions</label>
                <input type="checkbox" 
                onChange={(e) => setAccepted(e.target.checked)}
                value={accepted}
                id='accepted'/>
                <p style={{ color: "red" }}>{errors.accepted}</p>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegisterForm