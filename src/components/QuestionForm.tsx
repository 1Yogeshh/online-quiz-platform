import React, { useState } from 'react';
import { Question } from '../types';

interface QuestionFormProps {
  addQuestion: (question: Question) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ addQuestion }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);

  const handleAddQuestion = () => {
    if (question && options.every(opt => opt) && correctAnswer !== null) {
      addQuestion({ question, options, correctAnswer });
      setQuestion('');
      setOptions(['', '', '', '']);
      setCorrectAnswer(null);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        className="border p-2 w-full mb-2"
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
          className="border p-2 w-full mb-2"
        />
      ))}
      <select
        value={correctAnswer !== null ? correctAnswer : ''}
        onChange={(e) => setCorrectAnswer(Number(e.target.value))}
        className="border p-2 w-full mb-4"
      >
        <option value="" disabled>Select Correct Answer</option>
        {options.map((_, index) => (
          <option key={index} value={index}>Option {index + 1}</option>
        ))}
      </select>
      <button onClick={handleAddQuestion} className="bg-blue-500 text-white p-2 rounded">Add Question</button>
    </div>
  );
};

export default QuestionForm;