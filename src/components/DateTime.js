import  React, { useState , useEffect } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p className='time'> <AiOutlineClockCircle/> {date.toLocaleTimeString()}</p>
            <p className='date'>  <AiOutlineCalendar/> {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime