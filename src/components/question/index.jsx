import Wrapper from './style'

const Question = () => {
  const options = [1, 2, 3, 4]
  return (
    <Wrapper>
      <div className='heading'>Question 1</div>
      <div className='question'>What is the value of 1+1 ?</div>
      <div className='answer-choices'>
        {
          options.map((option, i) => (
            <label key={i} htmlFor="">
              <input
                type="radio"
                name='option'
              />option{option}
            </label>
          ))
        }
      </div>
    </Wrapper>
  )
}

export default Question
