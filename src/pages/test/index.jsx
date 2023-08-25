import Wrapper from './style'
import Question from '../../components/question'
import Button from '../../components/button'

const Test = () => {
  const questions = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <Wrapper>
      <div className='questions'>
        {
          questions.map((question) => (
            <Question key={question} />
          ))
        }
      </div>
      <div className='submit-test'> 
        <Button type="button" name="button">Submit Test</Button>
      </div>
    </Wrapper>
  )
}

export default Test
