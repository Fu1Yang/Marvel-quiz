import React, { useEffect, useState } from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import {QuizMarvel} from '../QuizMarvel'

const Quiz = props => {
  const [levels, setLevels] = useState(['debutant', 'confirmer', 'expert']);
  const [storedQuestion, setStoredQuestion] = useState()
    const loadQuestions = level => {
      const fetchedArrayQuiz = QuizMarvel[0].quizz[level]
      console.log(fetchedArrayQuiz);
      if (fetchedArrayQuiz.length >= 10) {
          setLevels[1]
          const newArray = fetchedArrayQuiz.map(({answer,...keepRest})=> keepRest{

          })
      }else{
        console.log("Pas assez de question!!!");
        
      }
      
    }
  useEffect(() => {
    loadQuestions(levels[0]); // <-- levels, pas setLevels !
  }, [levels]);



  return (
    <div>
      <h2>Bonjour: {props.userData.pseudo}</h2>
      <Levels/>
      <ProgressBar/>
      <h2>Notre question Quiz</h2>
      <p className='answerOptions'>Question 1</p>
      <p className='answerOptions'>Question 2</p>
      <p className='answerOptions'>Question 3</p>
      <p className='answerOptions'>Question 4</p>
      <button className='btnSubmit'>Question suivant</button>
    </div>
  )
}

export default Quiz