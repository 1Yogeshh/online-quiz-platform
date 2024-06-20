export interface Question {
    question: string;
    options: string[];
    correctAnswer: number;
  }
  
  export interface Quiz {
    id: string;
    title: string;
    questions: Question[];
  }