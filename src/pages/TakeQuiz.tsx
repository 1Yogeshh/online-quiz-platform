import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Quiz } from '../types';

const TakeQuiz: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    const quizzes: Quiz[] = JSON.parse(localStorage.getItem('quizzes') || '[]');
    const currentQuiz = quizzes.find(q => q.id === id) || null;
    setQuiz(currentQuiz);
  }, [id]);

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = index;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    localStorage.setItem(`quiz-${id}-answers`, JSON.stringify(answers));
    navigate(`/results/${id}`);
  };

  if (!quiz) return <div>Loading...</div>;

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <>
    <div className='pl-96'>
    <div className="p-4">
      <h1 className="text-2xl mb-4  w-3/4"><span className='text-green-500'>Title:</span>{quiz.title}</h1>
      <div className="mb-4">
        <p className='text-xl w-3/4 mb-4'><span className='text-green-500'>Ques )</span>  {currentQuestion.question}</p>
        {currentQuestion.options.map((opt, index) => (
          <div key={index} className='flex'>
            <input
              type="radio"
              name="option"
              value={index}
              checked={answers[currentQuestionIndex] === index}
              onChange={() => handleAnswer(index)}
              className="mr-2 mb-2"
            />
            <p className='w-3/4 mb-2'>{opt}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        disabled={currentQuestionIndex === 0}
        className="bg-gray-500 text-white p-2 rounded mr-2 pl-10 pr-10 hover:text-gray-500 hover:bg-white hover:border-gray-500 hover:cursor-pointer "
      >
        Previous
      </button>
      {currentQuestionIndex < quiz.questions.length - 1 ? (
        <button
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Next
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white p-2 rounded pl-10 pr-10 hover:bg-white hover:text-green-500 hover:border-green-500 hover:cursor-pointer"
        >
          Submit
          </button>
      )}
    </div>
    </div>

    </>
  );
};

export default TakeQuiz;