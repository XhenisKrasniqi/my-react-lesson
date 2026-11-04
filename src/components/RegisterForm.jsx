
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
