import { styled } from "styled-components";

const Wrapper = styled.main`
padding: 10px 0px;

.inner .create-quiz{
   padding: 10px 0px;
}

.create-quiz a{
    background-color: #05386B;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
    color: white;
    font-weight: 500px;
    font-size: 1.2rem;
}

.inner .quizzes{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding-top: 10px; 
}
`
export default Wrapper