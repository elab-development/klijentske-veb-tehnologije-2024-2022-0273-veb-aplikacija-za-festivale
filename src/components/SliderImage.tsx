import React from 'react'
import { Festival } from '../types/festivals';

interface SliderImageProps {
    festival: Festival;
}

const SliderImage = ({festival}: SliderImageProps) => {
  return (
    <section className='p-8'>
            <div className='max-w-3xl relative my-0 mx-auto'>
                <div className='slider'>
                    <img id='slide-1' src={festival.poster !== 'N/A' ? festival.poster : 'https://via.placeholder.com/400'}/>
                    <img id='slide-2' src={festival.image1 !== 'N/A' ? festival.image1 : 'https://via.placeholder.com/400'}/>
                    <img id='slide-3' src={festival.image2 !== 'N/A' ? festival.image2 : 'https://via.placeholder.com/400'}/>
                </div>
                <div className='slider-nav'>
                    <a href='#slide-1'/>
                    <a href='#slide-2'/>
                    <a href='#slide-3'/>
                </div>
            </div>
    </section>
  )
}

export default SliderImage