import React, { useEffect, useState } from 'react';
import Levels from '../Levels';
import ProgressBar from '../ProgressBar';
import { QuizMarvel } from '../QuizMarvel';

const Quiz = ({ userData }) => {
  const levels = ['debutant', 'confirmer', 'expert'];
  const [quizLevel, setQuizLevel] = useState(0);
  const [maxQuestions, setMaxQuestions] = useState(10);
  const [storedQuestions, setStoredQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [userAnswer, setUserAnswer] = useState(null);

  const loadQuestions = (level) => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[level];

    if (fetchedArrayQuiz.length >= maxQuestions) {
      // Retire les réponses pour ne pas les afficher
      const cleanedQuestions = fetchedArrayQuiz.map(({ answer, ...rest }) => rest);
      setStoredQuestions(cleanedQuestions);
    } else {
      console.log('Pas assez de questions pour ce niveau !');
    }
  };

  // Chargement initial des questions au premier rendu
  useEffect(() => {
    const currentLevel = levels[quizLevel];
    loadQuestions(currentLevel);
  }, [quizLevel]);

  // Met à jour la question à afficher une fois que les questions sont chargées
  useEffect(() => {
    if (storedQuestions.length > 0) {
      setCurrentQuestion(storedQuestions[questionIndex].question);
      setOptions(storedQuestions[questionIndex].options);
    }
  }, [storedQuestions, questionIndex]);

  const submitAnswer = selectedAnswer => {
    setUserAnswer(selectedAnswer)
    setBtnDisabled(false)
  }

  return (
    <div>
      <h2>Bonjour : {userData.pseudo}</h2>
      <Levels />
      <ProgressBar />
      <h2>Question {questionIndex + 1}</h2>
      {currentQuestion && (
        <>
          <p>{currentQuestion}</p>
          {options.map((option, idx) => (
            <p key={idx} className={`answerOptions ${userAnswer == option ? "selected" : null}`}
              onClick={() => submitAnswer(option)}>{option}</p>
          ))}
        </>
      )}
      <button
        className="btnSubmit"
        disabled={btnDisabled}
        onClick={() => {
          if (questionIndex + 1 < storedQuestions.length) {
            setQuestionIndex(prev => prev + 1);
          } else {
            console.log('Fin du quiz');
            // Tu pourrais passer au niveau suivant ici
          }
        }}
      >
        Question suivante
      </button>
    </div>
  );
};

export default Quiz;
