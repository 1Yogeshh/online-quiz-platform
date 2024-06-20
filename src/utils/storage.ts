import { Quiz } from '../types';

export const saveQuiz = (quiz: Quiz) => {
  const quizzes: Quiz[] = JSON.parse(localStorage.getItem('quizzes') || '[]');
  quizzes.push(quiz);
  localStorage.setItem('quizzes', JSON.stringify(quizzes));
};

export const getQuizzes = (): Quiz[] => {
  return JSON.parse(localStorage.getItem('quizzes') || '[]');
};

export const getQuiz = (id: string): Quiz | undefined => {
  const quizzes: Quiz[] = getQuizzes();
  return quizzes.find(quiz => quiz.id === id);
};

export const saveQuizAnswers = (id: string, answers: number[]) => {
  localStorage.setItem(`quiz-${id}-answers`, JSON.stringify(answers));
};

export const getQuizAnswers = (id: string): number[] => {
  return JSON.parse(localStorage.getItem(`quiz-${id}-answers`) || '[]');
};