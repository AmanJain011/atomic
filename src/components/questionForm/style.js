import { styled } from "styled-components";

const Wrapper = styled.main`
padding: 10px 0px;

.inner span{
    font-weight: bold;
    font-size: 1.2rem;
}
.inner{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.inner textarea{
    resize: vertical;
}

#correct-answer{
    font-size: 1rem;
    padding: 10px;
    text-align: center;
}
`
export default Wrapper