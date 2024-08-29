import React from "react";
import { genres } from "../data/genres"

type SearchProps = {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelected: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Search({onSearch, onSelected}: SearchProps) {  

  return ( 
    <div className='flex justify-center shadow-xl w-2/3 rounded-3xl border-4 p-2'>
      <input className='flex-1 w-full rounded-xl text-xs font-bold outline-none md:text-xl' 
      placeholder='Search for festivals!' 
      onChange={onSearch} />
      <select onChange={onSelected}  
      className="bg-blue-600 text-white text-xs md:text-sm rounded-2xl font-bold w-1/4 outline-none md:p-3">
        {genres.map((genre) =>
          <option className="font-bold" key={genre.id} value={genre.value}>{genre.title}</option>
        )}
      </select>
    </div>
  )
}

export default Search