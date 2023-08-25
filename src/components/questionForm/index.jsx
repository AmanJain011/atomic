import axios from 'axios'
import { useState } from 'react'
import Button from '../button'
import Wrapper from './style'
import { useParams } from 'react-router-dom'

const QuestionForm = () => {
  const [option1, setOption1] = useState("")
  const [option2, setOption2] = useState("")
  const [option3, setOption3] = useState("")
  const [option4, setOption4] = useState("")
  const [ques, setQues] = useState("")
  const [correctAnsIndex, setCorrectAnsIndex] = useState("")
  const ans = [option1, option2, option3, option4]
  const {quizId} = useParams()

  const addQuestion = (e) => {
    e.target.disabled = true
    e.target.value = "Adding..."
    axios.post(`https://quizattendace.onrender.com/api/ques/add`, {
      ques, ans, correctAnsIndex, quizId
    }).then((res) => {
      console.log(res)
      alert("Question added to quiz successfully !")
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      e.target.value = "Add"
      e.target.disabled = false
      setOption1("")
      setOption2("")
      setOption3("")
      setOption4("")
      setQues("")
    })
  }

  return (
    <Wrapper>
      <div className = 'inner'>
        <span>Add a question : </span>

        <textarea rows = "3"
          value = {ques}
          placeholder = 'Type your question here...'
          onChange = {(e) => { setQues(e.target.value) }}
          required></textarea>

        <textarea rows = "3"
          value = {option1}
          placeholder = 'Enter option 1 text'
          onChange = {(e) => { setOption1(e.target.value) }}
          required></textarea>

        <textarea rows = "3"
          value = {option2}
          placeholder = 'Enter option 2 text'
          onChange = {(e) => { setOption2(e.target.value) }}
          required></textarea>

        <textarea rows = "3"
          value = {option3}
          placeholder = 'Enter option 3 text'
          onChange = {(e) => { setOption3(e.target.value) }}
          required></textarea>

        <textarea rows = "3"
          value = {option4}
          placeholder = 'Enter option 4 text'
          onChange = {(e) => { setOption4(e.target.value) }}
          required></textarea>

        <select id = "correct-answer" onChange={(e) => { setCorrectAnsIndex(e.target.value) }}>
          <option disabled selected value = "">--- Correct Answer ---</option>
          {
            ans.map((option, i) => (
              option ? <option key={option} value={i}>{option}</option> : null
            ))
          }
        </select>

        <Button
          type = "submit"
          value = "Add"
          method = {addQuestion}
          disabled = {false}
        />
      </div>
    </Wrapper>
  )
}

export default QuestionForm
