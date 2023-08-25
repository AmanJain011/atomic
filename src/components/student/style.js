import { styled } from "styled-components";

const Wrapper=styled.section `
flex: 1;
background-color: rgb(239 243 246);

.student-container {
  padding: 20px;
  background-color: $background-color; // Use your color variables
  font-family: 'Arial', sans-serif;

  h2 {
    color: $primary-color;
    text-align : center;
    padding: 10px;
  }
  img{
    height : 180px;
    width : 180px;
  }
  .quiz-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .quiz-box {
      background-color: white;  
      margin: 15px;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      a {
        text-decoration: none;
        font-size: 1.2rem;
        color: #05386B;
      }

      .quiz-thumbnail {
        border: 3px solid #5CDB95;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
        img {
          max-width: 50%;
          height: auto;
        }
      }

      .quiz-title {
        margin-top: 10px;
        padding: 2px;
      }
    }
  }
}

`
export default Wrapper;