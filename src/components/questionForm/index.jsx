import Button from '../button'
import Wrapper from './style'

const QuestionForm = () => {
  const options = [1, 2, 3, 4]
  return (
    <Wrapper>
      <div className='inner'>
        <span>Add a question : </span>

        <textarea rows="5"
          placeholder='Type your question here...'
          required></textarea>

        <textarea rows="5"
          placeholder='Enter option 1 text'
          required></textarea>

        <textarea rows="5"
          placeholder='Enter option 2 text'
          required></textarea>

        <textarea rows="5"
          placeholder='Enter option 3 text'
          required></textarea>

        <textarea rows="5"
          placeholder='Enter option 4 text'
          required></textarea>

          <select id="correct-answer">
          <option disabled selected>--- Correct Answer ---</option>
            {
              options.map((option) => (
                <option key={option}>{option}</option>
              ))
            }
          </select>

        <Button type="submit" value="submit">Submit</Button>
      </div>
    </Wrapper>
  )
}

export default QuestionForm
