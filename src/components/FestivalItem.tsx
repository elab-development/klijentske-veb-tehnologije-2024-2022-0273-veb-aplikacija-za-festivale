import { Festival } from "../types/festivals";

interface FestivalItemProps {
    festival: Festival;
}

export const FestivalItem = ({festival}: FestivalItemProps) => {
  return (
    <div className='group flex flex-col w-1/2 justify-center border-4 h-80 m-6 p-2 relative rounded-xl overflow-hidden transition-all shadow-md hover:scale-105 hover:cursor-pointer'>
        <p>{festival.location}</p>
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <span>{festival.type}</span>
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
