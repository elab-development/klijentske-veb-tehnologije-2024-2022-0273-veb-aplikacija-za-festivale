import React from "react";
import { Festival } from "../types/festivals";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface FestivalItemProps {
    festival: Festival;
    onFavoriteAdd: (festival: Festival) => void;
    onFavoriteRemove: (festival: Festival) => void;
}

export const FestivalItem = ({festival, onFavoriteAdd, onFavoriteRemove}: FestivalItemProps) => {

    return (
    <div className='group flex flex-col w-1/2 justify-center border-4 h-80 m-6 p-2 relative rounded-xl overflow-hidden transition-all shadow-md hover:scale-105 hover:cursor-pointer'>
        <div className="flex justify-between">
            <div className="flex-col">
                <p>{festival.location}</p>
                <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <span>{festival.type}</span>
                </div>
            </div>
            <div className="flex ">
                <PlusCircleIcon className="w-7 h-7 hover:bg-slate-400 hover:rounded-3xl m-2" onTouchStart={() => onFavoriteAdd(festival)} onMouseEnter={() => onFavoriteAdd(festival)}/>
                <XMarkIcon className="w-7 h-7 hover:bg-slate-400 hover:rounded-3xl m-2" onTouchStart={() => onFavoriteRemove(festival)} onMouseEnter={() => onFavoriteRemove(festival)}/>
            </div>
        </div>
        <div className='flex justify-center items-center h-full overflow-hidden '>
            <img className="object-cover w-full h-auto" src={festival.poster !== 'N/A' ? festival.poster : 'https://via.placeholder.com/400'} alt="poster" />
        </div>

        <div>
            <h3 className='font-bold text-xl'>{festival.title}</h3>
            <p>{festival.start}-{festival.end}</p>
        </div>        
    </div>
  )
}
