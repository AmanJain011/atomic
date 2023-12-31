import { Link, useNavigate } from 'react-router-dom'
import Button from '../button'
import Wrapper from './style'
import useValidation from '../../hooks/useValidation'

const Header = () => {
  const navigate = useNavigate()
  const user = useValidation()

  const logout = () => {
    localStorage.removeItem("LOGGED_IN_USER")
    navigate("/login")
  }

  return (
    <Wrapper>
      <div className = "inner">
        <span className = 'logo'>
          <Link to = "/">Quizzie App</Link>
        </span>
        {
          user ? <Button type="button" name="button" value="Logout" method={logout}/> : null
        }
      </div>
    </Wrapper>
  )
}

export default Header
