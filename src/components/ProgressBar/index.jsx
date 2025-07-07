import React from 'react'

const ProgressBar = () => {
  return (
  <>
    <div className='percentage'>
        <div className='progresspercent'>Question: 1/10</div>
        <div className='progresspercent'>Progression: 10%</div>
    </div>
    <div className='progressBar'>
        <div className='progressBarChange' style={{width: '10%'}}></div>
    </div>
    </>
  )
}

export default ProgressBar