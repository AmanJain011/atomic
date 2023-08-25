import { styled } from "styled-components";

const Wrapper = styled.div`
border: 1px solid #05386B;
.heading{
    background-color: #05386B;
    color: white;
    padding: 10px;
}

.question{
    border: 2px solid #5CDB95;
    padding: 10px;
}

.answer-choices{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}
`
export default Wrapper