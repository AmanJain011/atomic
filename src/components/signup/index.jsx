import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './style'


const SignUp = () => {
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("student")

    const add = (e) => {
        e.preventDefault()
        e.target.value = "Registering..."
        e.target.disabled = true
        console.log(e.target)

        axios.post("https://server-api1-li2k.onrender.com/api/user/add", {
            name, contact, password, role
        }).then(res => {
            console.log(res.data)
            alert("Your account is successfully created")
        }).catch(err => {
            console.log(err.message)
            alert("Something went wrong")
        }).finally(() => {
            console.log("finally is running")
            e.target.value = "Register"
            e.target.disabled = false
            setContact("")
            setName("")
            setPassword("")
            setRole("student")
        })
    }

    return (
        <Wrapper >
            <form className='inner'>
                <span id='heading'>Sign Up</span>
                <input type="text"
                    placeholder='Name'
                    value={name}
                    required="required"
                    onChange={(e) => { setName(e.target.value) }}
                />
                <input type="text"
                    placeholder='Contact'
                    value={contact}
                    required="required"
                    onChange={(e) => { setContact(e.target.value) }}
                />
                <input type="text"
                    placeholder='Password'
                    value={password}
                    required="required"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <select onChange={(e) => setRole(e.target.value)} value={role} className='role'>
                    <option disabled selected>---User Type---</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                </select>
                <input 
                  type="submit"
                  value="Register"
                  disabled={false}
                  onClick={add}
                />
                <div id="last">
                    <span>Already have an account?</span>
                    <span><Link to='/login'> Login here</Link></span>
                
                </div>
            </form>
        </Wrapper>
    )
}

export default SignUp