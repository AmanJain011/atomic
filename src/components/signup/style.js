import { styled } from "styled-components";

const Wrapper = styled.main`
display: flex;
#heading{
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
}
align-items: center;
.inner{
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 500px;
}

.inner input{
    padding: 20px;
}

.inner .role{
    padding: 20px;
}
`
export default Wrapper