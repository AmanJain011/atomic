import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import Wrapper from './style'


const Login = () => {
    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const login = (e) => {
        e.preventDefault()
        e.target.value = "Logging..."
        e.target.disabled = true
        console.log(e.target)

        axios.post("https://server-api1-li2k.onrender.com/api/user/login", {
            contact, password
        }).then(res => {
            localStorage.setItem("LOGGED_IN_USER", JSON.stringify(res.data))
            navigate("/")
            console.log(res.data)
        }).catch(err => {
            console.log(err.message)
            alert("Wrong user credentials")
        }).finally(() => {
            console.log("Finally is running")
            e.target.value = "Login"
            e.target.disabled = false
            setContact("")
            setPassword("")
        })
    }


    return (
        <Wrapper id="login">
            <form>
            <span id='heading'>Login</span><br />
            <input type="text"
                placeholder='Contact'
                value={contact}
                required
                onChange={(e) => setContact(e.target.value)}
            />
            <br /><input type="text"
                placeholder='Password'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            <br /><input type="submit"
                value="Login"
                disabled={false}
                onClick={login}
            />
            <br /><div>
                <span>Don't have an account?</span>
                <span><Link to='/sign-up'> Sign-up</Link></span>
                
            </div>
            </form>
        </Wrapper>
        
    )
}

export default Login

