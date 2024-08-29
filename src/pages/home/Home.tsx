import React from 'react'
import { SearchCards } from '../../components/SearchCards'

export const Home = () => {

    return (
    <div className="flex justify-center items-center flex-col container mx-auto mb-20 mt-20">
        <div className='text-center mb-12'>
            <h1 className='font-bold text-5xl mb-4'>FestiFind</h1>
            <p className='text-xl'>Your go-to app for finding the hottest music festivals and concerts around the globe.</p>
        </div>
        <SearchCards />
    </div>
  )
  
}
