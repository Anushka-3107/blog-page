import React,{ useState } from "react";
import data from "../data.js";
import CityModal from "./CityModal.jsx";


const Cities = () => {

  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (city) => {
    setSelectedCity(city);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setSelectedCity(null);
    setIsModalOpen(false);
  }


  return (
    <>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-8 ">
      {data.map((item) => {
        return (
          <div 
          key={item.id} 
          className="border border-gray-200 p-4 shadow-lg rounded-2xl flex flex-col justify-between transition-transform duration-300 hover:scale-105">
          
            <img src={item.img} alt={item.img}
            className="w-full h-60 object-cover rounded-xl" />
            <h2 className="text-lg font-semibold text-center mt-3">{item.city}</h2>
            
            <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            <p className="text-sm font-medium mt-1">Rating : {item.rating} ⭐</p>
          

            <div className="text-center mt-4">
              <button className="px-4 py-2 rounded-full bg-pink-400 hover:bg-pink-500 text-white transition-colors duration-300"
              onClick={()=>handleOpenModal(item)}
              >Explore More
              </button>
            </div> 
          </div>
        );
      })}
      </div>

      <CityModal isOpen={isModalOpen} onClose={handleCloseModal} city={selectedCity}/>
    </>
    
    
  );
};

export default Cities;



