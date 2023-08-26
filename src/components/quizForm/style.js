import { styled } from "styled-components";

const Wrapper = styled.form`
flex: 1;
width: 90%;
margin: auto;
padding: 10px 0px;

.inner{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.inner span{
    font-weight: bold;
    font-size: 1.2rem;
}

.inner input{
    padding: 20px;
    font-size: 1.2rem;
}

.inner textarea{
    padding: 20px;
    resize: vertical;
    font-size: 1.2rem;
}

`
export default Wrapper