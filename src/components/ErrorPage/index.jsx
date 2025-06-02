import React from 'react'
import batman from '../../images/batman.png'
const ErrorPage = () => {
  return (
    <div className='quizz-bg'>
        <div className='container'>
            <h2>Oups, cette page n'existe pas!</h2>
            <img src={batman} alt="error page"/>
        </div>

    </div>
  )
}

export default ErrorPage