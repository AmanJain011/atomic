import { Link } from 'react-router-dom'
import Button from '../button'
import Wrapper from './style'

const Header = () => {

  return (
    <Wrapper>
      <div className="inner">
        <span className='logo'>
          <Link to="/">Quiz App</Link>
        </span>
        <Button type="button" name="button">Login</Button>
      </div>
    </Wrapper>
  )
}

export default Header
