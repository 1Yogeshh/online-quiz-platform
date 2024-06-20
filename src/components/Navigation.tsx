import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl">Quiz Platform</Link>
        <Link to="/create" className="bg-blue-500 p-2 rounded">Create Quiz</Link>
      </div>
    </nav>
  );
};

export default Navigation;