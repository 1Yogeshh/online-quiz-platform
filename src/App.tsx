import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizCreation from './pages/Quizcreation';
import TakeQuiz from './pages/TakeQuiz';
import ViewResults from './pages/Viewresult';
import ReviewAnswers from './pages/ReviewAnswer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<QuizCreation />} />
        <Route path="/quiz/:id" element={<TakeQuiz />} />
        <Route path="/results/:id" element={<ViewResults />} />
        <Route path="/review/:id" element={<ReviewAnswers />} />
      </Routes>
    </Router>
  );
}

export default App;