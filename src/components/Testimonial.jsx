import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional: or use plain Unicode arrows

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Customer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageUrl: 'https://source.unsplash.com/random/100x100/?portrait&1',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Client',
    text: 'A wonderful experience! The service was excellent.',
    imageUrl: 'https://source.unsplash.com/random/100x100/?portrait&2',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    title: 'User',
    text: 'Very satisfied with the quality of work.',
    imageUrl: 'https://source.unsplash.com/random/100x100/?portrait&3',
  },
  {
    id: 4,
    name: 'Emily Brown',
    title: 'Subscriber',
    text: 'The product is amazing! Great innovation and service.',
    imageUrl: 'https://source.unsplash.com/random/100x100/?portrait&4',
  },
  {
    id: 5,
    name: 'David Wilson',
    title: 'Supporter',
    text: 'Very professional and communicative throughout.',
    imageUrl: 'https://source.unsplash.com/random/100x100/?portrait&5',
  }
];


const defaultAvatar = 'https://www.gravatar.com/avatar/?d=mp';

const TestimonialCard = ({ testimonial }) => {
  const [imgSrc, setImgSrc] = useState(testimonial.imageUrl);

  return (
    <div className="bg-white text-gray-900 shadow-md rounded-md w-full max-w-md mx-auto p-6 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={imgSrc}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            onError={() => setImgSrc(defaultAvatar)}
          />
        </div>
        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
        <p className="text-sm text-gray-500">{testimonial.title}</p>
      </div>
      <div className="mt-4 text-center text-gray-700 italic dark:bg-gray-900 dark:text-white">
        &ldquo;{testimonial.text}&rdquo;
      </div>
    </div>
  );
};

const AutoSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-16 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div 
 data-aos = "fade-up"
data-aos-duration = "500"
data-aos-once = "true"
        className="text-center mb-12 ">
          <h2 className="text-sm text-orange-500 uppercase tracking-wide dark:bg-gray-900 dark:text-white">Testimonial</h2>
          <p className="text-3xl font-bold text-gray-800 dark:bg-gray-900 dark:text-white">What Our Customers Say</p>
        </div>

        <div   data-aos = "zoom-out"
data-aos-duration = "500"
data-aos-once = "true"
        className="relative w-full max-w-md mx-auto overflow-hidden h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 5, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full"
            >
              <TestimonialCard testimonial={testimonials[index]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-200"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-200"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
