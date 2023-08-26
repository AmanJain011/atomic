import { styled } from "styled-components";

const Wrapper = styled.form`

form {
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 240px;
    font-size: 20px;
    border-radius: 10px;
    /* border: red 1px solid;  */

}


#heading{
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    /* border: solid 1px red; */
}
input{
    padding: 10px;
    font-size: 1rem;
}
input[type = submit]{
    padding: 10px 85px 10px 85px;
    font-size: 1rem;
    background-color: #05386b;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    color: white;
}
div{
    display: flex;
    /* border: solid 1px red; */
    justify-content: center;
    gap: 3px;
}
div span a{
    color: #05386b;
}
`

export default Wrapper;