import React, { useState } from 'react';
import { Quiz, Question } from '../types';

const QuizCreation: React.FC = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);

  const addQuestion = () => {
    if (currentQuestion && options.every(opt => opt) && correctAnswer !== null) {
      setQuestions([...questions, { question: currentQuestion, options, correctAnswer }]);
      setCurrentQuestion('');
      setOptions(['', '', '', '']);
      setCorrectAnswer(null);
    }
  };

  const saveQuiz = () => {
    if (title && questions.length > 0) {
      const newQuiz: Quiz = {
        id: Date.now().toString(),
        title,
        questions,
      };
      const existingQuizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
      localStorage.setItem('quizzes', JSON.stringify([...existingQuizzes, newQuiz]));
    }
  };

  return (
    <div className='pl-40'>
        <div className="p-4">
      <h1 className="text-2xl mb-4 justify-center items-center flex">Create a Quiz</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Quiz Title"
        className="border p-2 w-full rounded mb-4"
      />
      {/* Question Form */}
      <div className="mb-4">
        <input
          type="text"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
          placeholder="Question"
          className="border p-2 w-full mb-2 rounded"
        />
        {options.map((opt, index) => (
          <input
            key={index}
            type="text"
            value={opt}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
            placeholder={`Option ${index + 1}`}
            className="border p-2 w-full mb-2 rounded"
          />
        ))}
        <select
          value={correctAnswer !== null ? correctAnswer : ''}
          onChange={(e) => setCorrectAnswer(Number(e.target.value))}
          className="border p-2 w-full mb-4 rounded"
        >
          <option value="" disabled>Select Correct Answer</option>
          {options.map((_, index) => (
            <option key={index} value={index}>Option {index + 1}</option>
          ))}
        </select>
        <div className='flex justify-center items-center'>
        <button onClick={addQuestion} className="bg-blue-500 text-white  p-2 pl-10 pr-10 rounded hover:text-blue-500 hover:border-blue-500 hover:bg-white ">Add Question</button>
        </div>
      </div>
      <div className='flex justify-center items-center'>
      <button onClick={saveQuiz} className="bg-green-500 text-white p-2 pl-12 pr-12 rounded hover:bg-white hover:text-green-500 hover:border-green-500">Save Quiz</button>
      </div>
    </div>
    </div>
  );
};

export default QuizCreation;