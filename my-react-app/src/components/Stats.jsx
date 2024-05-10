import React from 'react'

const Stats = ({toDoList}) => {
    let countList = toDoList.length;
  return (
    <div className='stats'>
        <p className='notify'>
            {countList === 0 ?'You Have Done Everything': `You have ${countList} items left to finish`}
        </p>
      
    </div>
  )
}

export default Stats
