import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import Wrapper from './style'
import Button from '../button'

const QuizForm = () => {
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("")
  const navigate = useNavigate()

  const createQuiz = (e) => {
    e.preventDefault()
    e.target.disabled = true
    e.target.value = "Creating..."

    axios.post("https://quizattendace.onrender.com/api/quiz/add", {
      title, subTitle, description, photo
    }).then((res) => {
      console.log(res.data[res.data.length-1].id)
      const id = res.data[res.data.length-1].id
      alert("Quiz is successfully created")
      navigate(`/teacher/quiz/${id}/add-question`)
    }).catch((err) => {
      alert("Some thing went wrong")
    }).finally(() => {
      e.target.value = "Create"
      e.target.disabled = false
    })
  }

  return (
    <Wrapper>
      <div className = 'inner'>
        <span>Create a Quiz : </span>
        <input
          type = "text"
          placeholder = 'Title for quiz'
          onChange = {(e) => { setTitle(e.target.value) }}
        />
        <input
          type = "text"
          placeholder = 'Subtitle for quiz'
          onChange = {(e) => { setSubTitle(e.target.value) }}
        />
        <textarea rows = "10" placeholder='Description'
          onChange = {(e) => { setDescription(e.target.value) }}
        ></textarea>
        <input
          type = "file"
          onChange = {(e) => { setPhoto(URL.createObjectURL(e.target.files[0])) }}
        />
        <Button
          type = "submit"
          value = "Create"
          method = {createQuiz}
          disabled = {false}
        />
      </div>
    </Wrapper>
  )
}

export default QuizForm
