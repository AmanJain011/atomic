import React, { useState } from 'react'
import Wrapper from './style'
import Button from '../button'
import axios from 'axios'

const QuizForm = () => {
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] =useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("")
  const [quiz, setQuiz] = useState({})

  const createQuiz = (e) => {
    e.preventDefault()
    setQuiz({...quiz, title, subTitle, description, photo})
    console.log(quiz)
    axios.post("https://quizattendace.onrender.com/")
  }

  return (
    <Wrapper>
      <div className='inner'>
        <span>Create a Quiz : </span>
        <input
          type="text"
          placeholder='Title for quiz'
          onChange={(e)=>{setTitle(e.target.value)}}
        />
        <input
          type="text"
          placeholder='Subtitle for quiz'
          onChange={(e)=>{setSubTitle(e.target.value)}}
        />
        <textarea rows="10" placeholder='Description'
         onChange={(e)=>{setDescription(e.target.value)}}
        ></textarea>
        <input
          type="file"
          onChange={(e)=>{setPhoto(URL.createObjectURL(e.target.files[0]))}}
        />
        <Button
          type="submit"
          name="create"
          method ={createQuiz}
        >Create</Button>
      </div>
    </Wrapper>
  )
}

export default QuizForm
