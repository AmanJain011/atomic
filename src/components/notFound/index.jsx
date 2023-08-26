import { useNavigate } from "react-router-dom"
import Button from "../button"
import Wrapper from "./style"

const NotFound = () => {
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/login")
    }

    const goToSignUp = () => {
        navigate("/sign-up")
    }

    return (
        <Wrapper>
            <h1>Page Not Found</h1>
            <div>
                <Button
                    type = "button"
                    value = "Login"
                    method = {goToLogin}
                />
                <Button
                    type = "button"
                    value = "SignUp"
                    method = {goToSignUp}
                />
            </div>
        </Wrapper>
    )
}

export default NotFound
