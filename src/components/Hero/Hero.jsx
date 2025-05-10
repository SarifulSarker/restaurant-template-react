import React, { useState } from 'react';
import mainDish1 from '../../assets/biryani1.png';
import sideDish2 from '../../assets/biryani2.png';
import sideDish3 from '../../assets/biryani3.png';

const Hero = () => {
  const [currentDish, setCurrentDish] = useState(mainDish1);

  return (
    <section className="h-95% w-full bg-gray-100 dark:bg-[#0D1117] text-gray-900 dark:text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 relative overflow-hidden">
      {/* Decorative yellow shape */}
      <div className="absolute right-0 top-0 w-[50%] h-full  bg-yellow-600 dark:bg-yellow-600 clip-path-custom z-0"></div>

      {/* Left Content */}
      <div  data-aos = "zoom-out"
      data-aos-duration = "500"
      data-aos-once = "true"
      className="z-10 md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Welcome to the <span className="text-yellow-500">Foodie</span> Zone
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint ex quod quos neque reprehenderit.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105">
          Order Now
        </button>
      </div>

      {/* Right Content */}
      <div data-aos = "fade-left"
      data-aos-duration = "500"
      data-aos-once = "true"
      className="z-20 md:w-1/2 flex flex-col items-center justify-center mt-10 md:mt-0 relative gap-6">
        {/* Main Dish */}
        <div className=" mt-10 w-[350px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full bg-white dark:bg-primary flex items-center justify-center shadow-2xl relative z-10">
          <img
            src={currentDish}
            alt="Main Dish"
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] object-cover rounded-full shadow-xl animate-spinSlow"
          />
        </div>

        {/* Side Dishes (stack vertically on mobile, right-aligned on desktop) */}
        <div className="flex md:flex-col gap-4 bg-yellow-100 dark:bg-[#222] p-4 rounded-xl shadow-lg border border-yellow-300 dark:border-yellow-600 absolute md:static right-4 top-1/2 md:top-auto transform md:transform-none -translate-y-1/2 md:translate-y-0">
          {[mainDish1, sideDish2, sideDish3].map((dish, idx) => (
            <img
              key={idx}
              src={dish}
              alt={`dish-${idx}`}
              className={`w-14 h-14 rounded-full border-4 cursor-pointer transition-transform duration-300 hover:scale-110 ${
                currentDish === dish ? 'border-yellow-500' : 'border-transparent'
              }`}
              onClick={() => setCurrentDish(dish)}
            />
          ))}
        </div>
      </div>

      {/* Custom clip-path styling */}
      <style>{`
        .clip-path-custom {
          clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);
        }

        @media (max-width: 768px) {
          .clip-path-custom {
            clip-path: none;
            width: 100%;
            height: 40%;
            top: auto;
            bottom: 0;
          }
        }

        .animate-spinSlow {
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
