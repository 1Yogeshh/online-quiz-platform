import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Quiz } from '../types';

const ViewResults: React.FC = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const quizzes: Quiz[] = JSON.parse(localStorage.getItem('quizzes') || '[]');
    const currentQuiz = quizzes.find(q => q.id === id) || null;
    setQuiz(currentQuiz);

    const storedAnswers: number[] = JSON.parse(localStorage.getItem(`quiz-${id}-answers`) || '[]');
    setAnswers(storedAnswers);

    if (currentQuiz) {
      let newScore = 0;
      currentQuiz.questions.forEach((q, index) => {
        if (q.correctAnswer === storedAnswers[index]) {
          newScore++;
        }
      });
      setScore(newScore);
    }
  }, [id]);

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="p-4 ml-96">
      <h1 className="text-2xl mb-4 text-green-500 w-3/4">Results for {quiz.title}</h1>
      <p className='text-xl'>Your Score : {score} / {quiz.questions.length}</p>
      <Link to={`/review/${id}`} className="bg-blue-500 text-white pt-2 pb-2 rounded mt-4 inline-block pl-10 pr-10 hover:bg-white hover:border-blue-500 hover:text-blue-500">
        Review Answers
      </Link>
    </div>
  );
};

export default ViewResults;