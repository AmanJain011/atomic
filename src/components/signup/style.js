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

.inner input[type=submit]{
    color: white;
    font-size: large;
    font-weight: bold;
    background-color: #05386b;
}

.inner #last{
    margin-top: 10px;
    font-size: large;
    align-items: center;
    display: flex;
    justify-content: space-between;

}

.inner #last [type=submit]{
    padding: 10px;
    border-radius: 50px;

}
`
export default Wrapper