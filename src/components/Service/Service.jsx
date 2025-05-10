import React from 'react';
import mainDish1 from '../../assets/biryani1.png';
import sideDish2 from '../../assets/biryani2.png';
import sideDish3 from '../../assets/biryani3.png';
import { FaUtensils, FaDrumstickBite, FaCoffee } from 'react-icons/fa';

const services = [
  {
    title: 'Biryani',
    img: mainDish1,
    icon: <FaUtensils size={28} className="text-yellow-500" />,
  },
  {
    title: 'Chicken Kari',
    img: sideDish2,
    icon: <FaDrumstickBite size={28} className="text-yellow-500" />,
  },
  {
    title: 'Cold Coffee',
    img: sideDish3,
    icon: <FaCoffee size={28} className="text-yellow-500" />,
  },
];

const Service = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6 md:px-16 text-center relative">
      {/* Title */}
      <h3 className="text-yellow-500 text-lg font-medium">Our Services</h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        What We Offer
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
        We serve a variety of delicious meals crafted with passion and the finest ingredients to satisfy every craving.
      </p>

      {/* Cards */}

<div data-aos = "zoom-out"
data-aos-duration = "500"
data-aos-once = "true"
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
  {services.map(({ title, img, icon }, idx) => (
    <div
      key={idx}
      className="group relative bg-white dark:bg-gray-700 text-black dark:text-white rounded-2xl pt-20 pb-6 px-4 shadow-xl 
                 hover:bg-yellow-400 dark:hover:bg-yellow-400 hover:scale-105 transition-transform duration-300 flex flex-col items-center"
    >
      {/* Floating Image */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 group-hover:scale-110">
        <img
          src={img}
          alt={title}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md
                     group-hover:border-yellow-300 dark:group-hover:border-yellow-700 transition-all duration-300"
        />
      </div>

      {icon}
      <h4 className="font-semibold text-xl mt-6">{title}</h4>
      <p className="text-sm mt-2 leading-relaxed text-center px-2">
        Delicious and freshly prepared {title} that satisfies your cravings.
      </p>
    </div>
  ))}
</div>



      {/* CTA Section */}
      <div  data-aos = "fade-up"
data-aos-duration = "400"
data-aos-once = "true"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 text-left">
        <div className="max-w-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our dishes are cooked with care and quality ingredients to ensure every bite brings joy. From classic biryani to modern flavors, we’ve got it all.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Fast delivery, tasty food, and a passion for great service – that’s what makes us special.
          </p>
        </div>
        <img
          src={mainDish1}
          alt="Main Dish"
          className="w-64 h-64 object-cover rounded-full border-4 border-yellow-300 dark:border-yellow-600 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Service;
