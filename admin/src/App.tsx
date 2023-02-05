import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import {NotFoundPage} from "./pages/not-found";
import {LoginPage} from "./pages/login";
import {QuestionsPage} from "./pages/questions";
import {QuestionPage} from "./pages/question";
import CreateQuestion from "./pages/question/CreateQuestion";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Routes>
        <Route path="/question/:questionId" element={<QuestionPage/>}/>
        <Route path="/question/new" element={<CreateQuestion/>}/>
        <Route path="/questions" element={<QuestionsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
