import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/test";
import Header from "./components/header";
import Footer from "./components/footer";
import QuizForm from "./components/quizForm";
import { useState } from "react";
import QuestionForm from "./components/questionForm";
import SignUp from "./components/signup";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-up" exact element={<SignUp />}/>
        <Route path="/quizzes/:quizId/questions/test" exact element={<Test />} />
        <Route path="/teacher/create-quiz" exact element={<QuizForm/>}/>
        <Route path="/teacher/add-question" exact element={<QuestionForm/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
