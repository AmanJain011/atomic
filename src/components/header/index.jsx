import { Link } from 'react-router-dom'
import Button from '../button'
import Wrapper from './style'

const Header = () => {
  const logout = () => {
    localStorage.removeItem("https://server-api1-li2k.onrender.com/api/user/login", JSON.stringify())
    console.log()
  }

  return (
    <Wrapper>
      <div className="inner">
        <span className='logo'>
          <Link to="/">Quiz App</Link>
        </span>
        <Button type="button" name="button" onClick={logout}>Logout</Button>
      </div>
    </Wrapper>
  )
}

export default Header
