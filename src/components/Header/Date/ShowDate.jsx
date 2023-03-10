import React from 'react'
import './ShowDate.scss'

function ShowDate() {

    // код для відображення поточної дати дати на сайти 
    function addZeroInDate(date){
        return (date < 10) ? date = '0' + date : date; 
    }
    const days = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday']
    const months = ['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const text = document.querySelector('.date')
    function getUserDate(t = new Date()){
        let year = t.getFullYear()
        let month = months[(t.getMonth())]
        let dayInTheMonth = addZeroInDate(t.getDate())
        let dayInTheWeek = days[t.getDay()]
        return `${dayInTheWeek} ${month} ${dayInTheMonth}  ${year}`;
    }
  return (
    <div>
        <div className='date'>
            <p className='date__show'>{getUserDate()}</p>
        </div>
    </div>
  )
}

export default ShowDate