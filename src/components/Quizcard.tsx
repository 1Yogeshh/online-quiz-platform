import React from 'react';
import { Link } from 'react-router-dom';
import { Quiz } from '../types';

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  return (
    <div className="border p-4 rounded shadow transform transition duration-500 hover:scale-105">
      <h2 className="text-2xl mb-2">{quiz.title}</h2>
      <Link to={`/quiz/${quiz.id}`} className="bg-green-500 text-white p-2 rounded">Take Quiz</Link>
    </div>
  );
};

export default QuizCard;