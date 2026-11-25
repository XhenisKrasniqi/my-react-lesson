
import React, { useState } from 'react'
import Input from './Input'
import Title from './Title'
import Button from './Button'
import Select from './Select'


function RegisterForm() {
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [course, setCourse] = useState("");

    
    const [nameError, setNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    
    const [students, setStudents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;

     
        if (name.trim().length < 3) {
            setNameError("Name must be at least 3 letters");
            isValid = false;
        } else {
            setNameError("");
        }

    
        if (lastName.trim().length < 3) {
            setLastNameError("Last name must be at least 3 letters");
            isValid = false;
        } else {
            setLastNameError("");
        }

      
        if (age === "" || Number(age) < 18) {
            setAgeError("Age must be at least 18");
            isValid = false;
        } else {
            setAgeError("");
        }

  
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError("Please enter a valid email");
            isValid = false;
        } else {
            setEmailError("");
        }

   
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            isValid = false;
        } else {
            setPasswordError("");
        }




        if (isValid) {
            const newStudent = {
                name,
                lastName,
                age,
                email,
                course
            };

            setStudents([...students, newStudent]);


            setName("");
            setlastName("");
            setAge("");
            setEmail("");
            setPassword("");
            setCourse("");
        }
    };

    return (
        <div className="register-container">

            <Title title="Register new student" />

            <form onSubmit={handleSubmit}>

                <Input
                    type="text"
                    inputPlaceholder="First name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p className="error-message">{nameError}</p>

                <Input
                    type="text"
                    inputPlaceholder="Last name"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                />
                <p className="error-message">{lastNameError}</p>

                <Input
                    type="number"
                    inputPlaceholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <p className="error-message">{ageError}</p>

                <Input
                    type="email"
                    inputPlaceholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="error-message">{emailError}</p>

                <Select
                    name="course"
                    value={course}
                    options={["React", "JavaScript", "HTML", "CSS"]}
                    onChange={(e) => setCourse(e.target.value)}
                />


                <Input
                    type="password"
                    inputPlaceholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="error-message">{passwordError}</p>

                <Button
                    buttonName="Add new"
                    buttonType="submit"
                />

            </form>

            
            <div className="students-list">

                <h2>Registered Students ({students.length})</h2>

                {students.map((student, index) => (
                    <div className="student-card" key={index}>

                        <h3>Student #{index + 1}</h3>

                        <p>
                            <strong>Name:</strong> {student.name}
                        </p>

                        <p>
                            <strong>Last name:</strong> {student.lastName}
                        </p>

                        <p>
                            <strong>Age:</strong> {student.age}
                        </p>

                        <p>
                            <strong>Email:</strong> {student.email}
                        </p>

                        <p>
                            <strong>Course:</strong> {student.course}
                        </p>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default RegisterForm;
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
