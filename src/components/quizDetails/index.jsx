import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import Wrapper from './style';
import Button from '../button';

const QuizDetails = () => {
    const [questions, setQuestions] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://quizattendace.onrender.com/api/quiz/getQuestions/${id}`)
            .then((res) => {
                console.log(res.data)
                setQuestions(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <Wrapper>
            {
                questions ? (
                    <div className = "quiz-details">
                        <h3>Questions:</h3>
                        <ul>
                            {questions.map((question, questionIndex) => {
                                questionIndex++
                                return (
                                    <li key = {question.id} >
                                        {questionIndex + " " + question.ques}
                                        <ul>
                                            {question.ans.map((option, optionIndex) => (
                                                <li key = {optionIndex} className = 'ques'>
                                                    <label>
                                                        <input
                                                            type = "radio"
                                                            name = {`question-${questionIndex}`}
                                                        />
                                                        {option}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                        <Button
                            type = "button"
                            value = "Submit"
                        />
                    </div>
                ) : (
                    <h1>There are no questions</h1>
                )
            }
        </Wrapper>)
}

export default QuizDetails;








