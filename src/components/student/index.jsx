import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Wrapper from './style';
import Button from '../button';

const Student = () => {
    const [quizzes, setQuizzes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://quizattendace.onrender.com/api/quiz/read")
            .then((res) => {
                console.log(res.data)
                setQuizzes(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    const goToCreateQuizForm = () => {
        navigate("/teacher/create-quiz")
    }

    const goToAddQuestionForm = (id) => {
        navigate(`/teacher/quiz/${id}/add-question`)
    }

    return (
        <Wrapper>
            <div className="student-container">
                <section>
                    <Button
                        type="button"
                        value="+ Create Quiz"
                        method={goToCreateQuizForm}
                    />
                    <div>
                        <h2>Welcome, Student!</h2>
                        <ul className="quiz-list">
                            {quizzes.map(quiz => (
                                quiz.photo ?
                                    <li key={quiz.id} className='quiz-box'>
                                        <Link to={`/quiz/${quiz.id}`}>
                                            <div className="quiz-thumbnail">
                                                <img src={quiz.photo} alt={`${quiz.title} Thumbnail`} />
                                            </div>
                                            <h3 className="quiz-title">{quiz.title}</h3>
                                            <div className="quiz-title">{quiz.subTitle}</div>
                                        </Link>
                                        <Button
                                            type="button"
                                            value="+ Add"
                                            method={() => { goToAddQuestionForm(quiz.id) }}
                                        />
                                    </li> : null
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </Wrapper>
    );
}

export default Student;
