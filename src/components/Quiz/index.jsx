import React from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'


const Quiz = props => {



  return (
    <div>
      <h2>Bonjour: {props.userData.pseudo}</h2>
      <Levels/>
      <ProgressBar/>
    </div>
  )
}

export default Quiz