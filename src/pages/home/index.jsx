import { Link, useNavigate } from 'react-router-dom'
import Quiz from '../../components/quiz'
import Wrapper from './style'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  const [quizzes, setQuizzes] = useState([1, 2, 3])

    useEffect(() => {
        axios.get("https://quizattendace.onrender.com/api/quiz/read")
        .then((res) => {
          console.log(res.data)
          setQuizzes(res.data)
        })
        .catch((err) => {console.log(err)})
    }, [])

  return (
    <Wrapper>
      <div className="inner">
        <div className="create-quiz">
          <Link to="/teacher/create-quiz">
            + Create Quiz
          </Link>
        </div>
        <div className='quizzes'>
          {
            quizzes.map((quiz) => (
              <Quiz key={quiz.id} quiz={quiz}/>
            ))
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default Home
