import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Festival } from "../types/festivals"
import { FestivalItem } from "./FestivalItem";
import Favorites from "../data/favorite";

type CardProps = {
    searchCards: Festival[];
}

export const Card = ({searchCards, }: CardProps) => {
    const[favorite] = useState(new Favorites());
    const [favoritesList, setFavoritesList] = useState(favorite.favorites);

    const handleFavoriteAdd = (festival: Festival) => {
        favorite.addFavorite(festival.id, festival.title);
        setFavoritesList([...favorite.favorites]);
    };

    const handleFavoriteRemove = (festival: Festival) => {
        favorite.removeFavorite(festival.id);
        setFavoritesList([...favorite.favorites]);
    }

    return (
        <>
            <div className="w-full">
                {searchCards.map((f) => (
                        <Link to='/festivalinfo' state={{ festival: f }} 
                        className='my-12 flex justify-center items-center' key={f.id}>
                            <FestivalItem festival={f} onFavoriteAdd={handleFavoriteAdd} onFavoriteRemove={handleFavoriteRemove}/>
                        </Link>
                    ))}
            </div>
            <div className='border-8 rounded-3xl py-4 px-8 my-10 w-1/2'>
                <div className='text-center items-center flex flex-col'>
                    <h1>Omiljeni festivali: </h1>
                </div>
                <div>
                    {
                        favoritesList.map((favorite) => (
                            <div key={favorite.id}>
                                <h1>{favorite.name}</h1>
                                <hr/>    
                            </div>
                            
                        ))
                    }
                </div>
            </div>
        </>
    )
}
