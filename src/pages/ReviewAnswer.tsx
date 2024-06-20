import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Quiz } from '../types';

const ReviewAnswers: React.FC = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    const quizzes: Quiz[] = JSON.parse(localStorage.getItem('quizzes') || '[]');
    const currentQuiz = quizzes.find(q => q.id === id) || null;
    setQuiz(currentQuiz);

    const storedAnswers: number[] = JSON.parse(localStorage.getItem(`quiz-${id}-answers`) || '[]');
    setAnswers(storedAnswers);
  }, [id]);

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="p-4 ml-80">
      <h1 className="text-2xl mb-4 w-3/4 text-green-500">Review Answers for {quiz.title}</h1>
      {quiz.questions.map((question, qIndex) => (
        <div key={qIndex} className="mb-4 w-3/4 text-xl ">
          <p><span className='text-green-500'>Ques ) </span>{question.question}</p>
          {question.options.map((opt, index) => (
            <div
              key={index}
              className={`p-2 w-3/4 mb-2 mt-2 ${index === question.correctAnswer ? 'bg-blue-500 rounded' : ''} ${index === answers[qIndex] && index !== question.correctAnswer ? 'bg-red-300' : ''}`}
            >
              <p>{opt}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ReviewAnswers;