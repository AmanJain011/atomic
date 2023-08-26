import { Link } from 'react-router-dom'
import Button from '../button'
import Wrapper from './style'
import useValidation from '../../hooks/useValidation'

const Header = () => {
  const user = useValidation()
  const logout = () => {
    localStorage.removeItem("https://server-api1-li2k.onrender.com/api/user/login", JSON.stringify())
    console.log()
  }

  return (
    <Wrapper>
      <div className = "inner">
        <span className = 'logo'>
          <Link to = "/">Quizzie App</Link>
        </span>
        <Button type="button" name="button">Login</Button>
      </div>
    </Wrapper>
  )
}

export default Header
