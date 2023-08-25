import Wrapper from './style'
import quiz1 from '../../assets/quiz/quiz1.jpeg'
import Button from '../button'
import { useNavigate } from 'react-router-dom'

const Quiz = ({quiz}) => {
  const navigate = useNavigate()
  

  console.log()
  const takeQuiz = () => {
    navigate("/quizzes/2/questions/test")
  }

  return (
    <Wrapper>
      <img src={quiz.photo} alt="quiz" />
      <div className='detail'>
        <p>{quiz.title}</p>
        <div>
          <span>{quiz.subTitle}</span>
          <Button type="button" value="button" method={takeQuiz}>Take Quiz</Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Quiz
