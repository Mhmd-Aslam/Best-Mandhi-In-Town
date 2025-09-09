import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();
  const avg = restaurant.avg_rating ?? restaurant.rating;
  const count = restaurant.review_count ?? 0;

  const handleClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="text-left bg-white dark:bg-[#2f3031] rounded-xl overflow-hidden shadow hover:shadow-md dark:shadow-none ring-1 ring-black/5 dark:ring-[#555] transition-all hover:-translate-y-0.5"
    >
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded-full">
          ⭐ {avg}{count ? ` (${count})` : ''}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">{restaurant.name}</h3>
        <p className="text-amber-600 font-medium mt-0.5">{restaurant.type}</p>
        <p className="text-slate-600 dark:text-gray-300 mt-2">📍 {restaurant.location}</p>
      </div>
    </button>
  );
};

export default RestaurantCard;
