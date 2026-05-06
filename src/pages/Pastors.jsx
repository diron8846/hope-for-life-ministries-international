import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import pastorPhoto from '../assets/pastor-photo.jpg';
import pastor2 from '../assets/Pastor.jpeg';

export const Pastors = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeader title="Our Pastors" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-golden">
              <img src={pastorPhoto} alt="Pst Dismus Mutuku" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary dark:text-golden">Pst Dismus Mutuku</h3>
            <p className="text-gray-700 dark:text-gray-300">Founder of Hope For Life Ministry</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-golden">
              <img src={pastor2} alt="Pst Charles Mutisya" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-secondary dark:text-red-light">Pst Charles Mutisya</h3>
            <p className="text-gray-700 dark:text-gray-300">Senior Pastor</p>
          </div>
        </div>
      </div>
    </section>
  );
};
