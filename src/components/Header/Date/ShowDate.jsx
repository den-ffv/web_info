import React from 'react'
import './ShowDate.scss'

function ShowDate() {

    // код для відображення поточної дати дати на сайти 
    function addZeroInDate(date){
        return (date < 10) ? date = '0' + date : date; 
    }
    const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
    const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

    const text = document.querySelector('.date')
    function getUserDate(t = new Date()){
        let year = t.getFullYear()
        let month = months[(t.getMonth())]
        let dayInTheMonth = addZeroInDate(t.getDate())
        let dayInTheWeek = days[t.getDay()]
        return `${dayInTheWeek}, ${month} ${dayInTheMonth}, ${year}`;
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