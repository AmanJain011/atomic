import { styled } from "styled-components";

const Wrapper = styled.main`
flex: 1;

.questions{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.submit-test{
    display: flex;
    justify-content: center;
    padding: 10px;
}
`
export default Wrapper