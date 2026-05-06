import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import pastorPhoto from '../assets/pastor-photo.jpg';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Pst Dismus Mutuku',
      role: 'Pastor',
      image: pastorPhoto,
      text: 'This ministry has transformed my life completely. The teachings are powerful and the community is loving and supportive.'
    },
    {
      name: 'Sunday School',
      role: 'Youth Ministry',
      icon: 'fas fa-graduation-cap',
      text: 'We use this platform to reach the young generation with the pure gospel through open airs and also door to door. We are all aware that the devil is out to misguide the youngstars. Hence it\'s our responsibility to salvage them and equip them with the right gospel and prepare them for the second coming of Jesus Christ.'
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-light dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader title="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-golden">
              <div className="flex items-center mb-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-golden"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
                    <i className={testimonial.icon}></i>
                  </div>
                )}
                <div className="ml-4">
                  <h4 className="font-bold text-primary dark:text-golden">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
