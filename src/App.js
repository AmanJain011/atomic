import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import QuizForm from "./components/quizForm";
import QuestionForm from "./components/questionForm";
import SignUp from "./components/signup";
import Login from "./components/login";
import Student from "./components/student";
import QuizDetails from "./components/quizDetails";
import NotFound from "./components/notFound";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" exact element = {<Student />} />
        <Route path = '/quiz/:id' element = {<QuizDetails />} />
        <Route path = "/login" exact element = {<Login />} />
        <Route path = "/sign-up" exact element = {<SignUp />} />
        <Route path = "/teacher/create-quiz" exact element = {<QuizForm />} />
        <Route path = "/teacher/quiz/:quizId/add-question" exact element = {<QuestionForm />} />
        <Route path="*" exact element = {<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
