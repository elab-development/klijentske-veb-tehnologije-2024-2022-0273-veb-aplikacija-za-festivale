import React, { useState } from 'react';
import { Festival } from '../types/festivals';
import SliderImage from './SliderImage';
import Reviews from '../data/reviews';
import { useAuth } from '../context/AuthContext';
import { CalendarIcon, LinkIcon, MapPinIcon, MusicalNoteIcon } from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/24/outline';

interface FestivalInfoProps {
    festival: Festival;
}

const FestivalInfo = ({ festival }: FestivalInfoProps) => {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);
    const [review] = useState(new Reviews());
    const [reviewsList, setReviewsList] = useState(review.reviews);
    const [averageRating, setAverageRating] = useState(0);
    const { user } = useAuth();


    const handleReview = () => {
        review.addReview(festival.id, reviewText, rating);
        setReviewsList([...review.reviews]);

        const average = review.averageRating(festival.id);
        setAverageRating(average);
    };

    const handleClick = () => {
        window.open(festival.url);
    };

    return (
        <div className="my-20">
            <SliderImage festival={festival} />
            <hr className="my-10" />
            <div className="flex-col text-center gap-x-8">
                <div className="py-10 px-5 mx-20 bg-blue-600 text-white rounded-3xl">
                    <span className="text-5xl font-bold mb-2 hover:text-6xl hover:transition-all hover:cursor-pointer hover:content after:transition-all">
                      {festival.title}
                    </span>
                    <br />
                    <div className="mb-5 pt-2 flex flex-col items-center">
                        <div className="flex items-center my-2">
                            <CalendarIcon className='w-7 h-7 mr-2'/>
                            {festival.start} - {festival.end}
                        </div>
                        <div className="flex items-center my-2">
                            <MapPinIcon className='w-7 h-7 mr-2'/>
                            Location:<strong>{festival.location}</strong>
                        </div>
                        <div className='flex items-center my-2'>
                            <MusicalNoteIcon className='w-7 h-7 mr-2'/>
                            Genre:<strong>{festival.type}</strong>
                        </div>
                        <div className='items-center my-2'>
                            <button className="flex items-center mt-4 px-4 py-2 font-bold bg-white text-black rounded-3xl" onClick={handleClick}><span>Buy tickets</span><LinkIcon className='w-4 h-4 md:w-7 md:h-7 m-1'/></button>
                        </div>
                    </div>
                </div>
                <div className="my-10 mx-10 text-xl">
                    <p>{festival.text}</p>
                </div>
            </div>
            <hr className="my-10" />

            
            <div className="flex flex-row justify-center">
                {user && (<section className="text-center w-1/2">
                    <h1 className="my-4 font-bold text-xl">Leave Review:</h1>
                    <form className="flex flex-col text-center items-center">
                        <textarea
                            className="mb-4 w-1/2 rounded-xl text-center border-2 p-2 text-black"
                            name="review"
                            placeholder="Vas komentar"
                            onChange={(e) => setReviewText(e.target.value)}
                        />
                        <select
                            className="bg-yellow-500 p-2 text-white text-xs md:text-sm rounded-2xl font-bold outline-none md:p-3"
                            onChange={(e) => setRating(parseInt(e.target.value))}
                            required
                        >
                            {[1,2,3,4,5].map((grade) => (
                                <option className="font-bold" key={grade} value={grade}>
                                    {grade}
                                </option>
                            ))}
                        </select>
                        <button
                            onClick={handleReview}
                            type="button"
                            className="bg-blue-600 text-white p-4 rounded-2xl mt-2"
                        >
                            Add review
                        </button>
                    </form>
                </section>)}
                <section className="w-1/2 text-center my-4 flex flex-col items-center">
                    <div>
                        <h1 className='text-xl font-bold'>Reviews:</h1>
                        <h1 className='mb-2 text-xs'>Average rating: <strong>{averageRating.toFixed(2)}</strong></h1>
                    </div>
                    {reviewsList.map((ocena) => (
                        <div
                        key={ocena.id}
                        className="text-left w-2/3 border-4 my-4 rounded-2xl p-4 flex flex-col">
                                <h1 className="mb-2 text-xs">{festival.title} : {user}</h1>
                            <hr />
                            <div className="flex flex-row justify-between">
                                <h1 className="text-left break-words max-w-full">{ocena.review}</h1>
                                <div className='flex items-center my-2 pl-2'>                                                                
                                    Ocena: <strong className="text-xl">{ocena.rating}</strong>
                                    <StarIcon className='w-7 h-7 mr-2'/>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default FestivalInfo;
