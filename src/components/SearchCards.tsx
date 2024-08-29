import React, { useState } from 'react'
import { festival } from '../data/festival';
import { Festival } from '../types/festivals';
import Search from './Search';
import { Card } from './Card';

export const SearchCards = () => {
    const [searchFestivals, setSearchFestivals] = useState('');
    const [selectFestivals, setSelectFestivals] = useState('');
    const [filteredFestivals, setFilteredFestivals] = useState(festival);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchFestivals(searchTerm);

        filterFestivals(searchTerm, selectFestivals);
    }

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let selected = event.target.value.toLowerCase();
        if (selected == 'all') {
            selected = '';
        }
        setSelectFestivals(selected);

        filterFestivals(searchFestivals, selected);
    }
    
    const filterFestivals = (searchTerm: string, selected: string) => {
        const filtered = festival.filter((f: Festival) => 
            f.title.toLowerCase().includes(searchTerm) && 
            f.type.toLowerCase().includes(selected)
        );
        
        setFilteredFestivals(filtered);
    }

    return (
        <>
            <Search onSearch={handleSearch} onSelected={handleSelect}/>
            {
                filteredFestivals?.length > 0
                ? 
                <Card searchCards={filteredFestivals} />
                :   <div className='text-2xl my-10'>
                        No festivals found!
                    </div>
            }
        </>
    )
}
