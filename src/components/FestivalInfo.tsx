import React from 'react'
import { Festival } from '../types/festivals';
import SliderImage from './SliderImage';

interface FestivalInfoProps {
    festival: Festival;
}

const FestivalInfo = ({festival}: FestivalInfoProps) => {

    return (
    <div className='my-20'>
        <SliderImage festival={festival}/>
        <hr className='mt-10'/>
        <div className='flex-col text-center gap-x-8'>
            <div className='my-10'>
                <h1 className='text-5xl font-bold mb-2'>{festival.title}</h1>
                <span className='mb-5'>
                    {festival.start} - {festival.end}<br/>
                    Genre: <strong>{festival.type}</strong><br/>
                    Location: <strong>{festival.location}</strong>
                </span>
            </div>
            <hr className='my-10'/>
            <div className='my-10'>
                <p>{festival.text}</p>
            </div>
        </div>
    </div>
  )
}

export default FestivalInfo