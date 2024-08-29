import React from 'react'
import { useLocation } from 'react-router-dom';
import { Festival } from '../types/festivals';
import FestivalInfo from '../components/FestivalInfo';

const FestivalDetails = () => {
  const location = useLocation();
  const { festival } = location.state as { festival: Festival };
  return (
    <FestivalInfo festival={festival} />
  )
}

export default FestivalDetails