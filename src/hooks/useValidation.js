import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useValidation = () => {
    const navigate = useNavigate()
    const loggedInUser = JSON.parse(localStorage.getItem("LOGGED_IN_USER"))

    useEffect(() => {
        if(!loggedInUser){
            navigate("/login")
        }
    }, [loggedInUser]) 

    return loggedInUser
}

export default useValidation