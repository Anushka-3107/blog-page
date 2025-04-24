import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CityModal = ({isOpen, onClose, city }) => {

    if(!isOpen || !city) return null;

  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-none flex items-center justify-center z-50 ">
      <div className="bg-white p-6 rounded-2xl w-full max-w-lg relative shadow-lg">
        <button
        className="absolute text-center top-2 right-2  text-xl font-bold text-gray-600 hover:text-black"
        onClick={onClose}
        >
           &times;
        </button>

        <img
          src={city.img}
          alt={city.city}
          className="w-full h-60 object-cover rounded-xl mb-2 "
        />
        <h2 className="text-2xl font-bold mb-1">{city.city}</h2>

        <p className=" text-gray-700 mb-2">{city.desc}</p>

        {/* <p className="font-medium text-sm">Rating : {city.rating} ⭐</p> */}

        {
            city.recommendations && city.recommendations.length > 0 && (
                <div className="mt-5">
                <h3 className="text-lg font-semibold mb-3">Top PLaces to Visit:</h3>
                <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                className="rounded-lg overflow-hidden"
                >
                {
                    city.recommendations.map((places,idx)=>{
                        return(
                            <div key={idx}>
                            <img src={places.img} alt="places" className="h-50 object-cover w-full"/>
                            <p className="legend">{places.name}</p>
                            </div>
                        )
                    })
                }
                </Carousel>
                </div>
            )
        }


        <div className="mt-2">
          <button
            className="px-4 py-1 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityModal;
