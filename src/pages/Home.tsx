import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quiz } from '../types';

const Home: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const storedQuizzes: Quiz[] = JSON.parse(localStorage.getItem('quizzes') || '[]');
    setQuizzes(storedQuizzes);
  }, []);

  return (
    <>
    <div className=''>
    <div className="p-4">
      <h1 className="text-3xl mb-6 text-center">Online Quiz Platform</h1>
      <div className="flex justify-center mb-6">
        <Link to="/create" className="bg-blue-500 text-white p-2 rounded hover:bg-white hover:border-blue-500 hover:border-blue-500">Create a New Quiz</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 ml-44">
        {quizzes.length === 0 ? (
          <p className="text-center col-span-full">No quizzes available. Create a new quiz!</p>
        ) : (
          quizzes.map((quiz) => (
            <div key={quiz.id} className="border p-4 rounded shadow">
              <h2 className="text-2xl mb-6 ">{quiz.title}</h2>
              <Link to={`/quiz/${quiz.id}`} className="bg-green-500 text-white p-2 rounded hover:text-green-500 hover:bg-white hover:border-green-500 ">Take Quiz</Link>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;