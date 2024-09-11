import React from "react";
import { Link } from "react-router-dom";
import { Festival } from "../types/festivals"
import { FestivalItem } from "./FestivalItem";

type CardProps = {
    searchCards: Festival[];
}

export const Card = ({searchCards, }: CardProps) => {

    return (
        <div className="w-full">
            {searchCards.map((f) => (
                    <Link to='/festivalinfo' state={{ festival: f }} 
                    className='my-12 flex justify-center items-center' key={f.id}>
                        <FestivalItem festival={f}/>
                    </Link>
                ))}
        </div>
    )
}
