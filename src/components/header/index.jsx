import { Link } from 'react-router-dom'
import Button from '../button'
import Wrapper from './style'
import useValidation from '../../hooks/useValidation'

const Header = () => {
  const user = useValidation()

  return (
    <Wrapper>
      <div className = "inner">
        <span className = 'logo'>
          <Link to = "/">Quizzie App</Link>
        </span>
        {
          user ? <Button
            type = "button"
            value = "Logout"
          /> : null
        }
      </div>
    </Wrapper>
  )
}

export default Header
