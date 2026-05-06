import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import graduatesPhoto from '../assets/graduates.jpg';
import teacher1 from '../assets/teacher1.jpg';
import teacher2 from '../assets/teacher2.jpg';
import teacher3 from '../assets/teacher3.jpg';
import teacher4 from '../assets/teacher4.jpg';

export const BibleCollege = () => {
  const teachers = [
    { name: 'Ev.Stanley George', title: 'Teacher', photo: teacher1 },
    { name: 'Ev.Ronald Maina', title: 'Teacher', photo: teacher2 },
    { name: 'Pastor Lamark Oyath', title: 'Mission Technical Adviser', photo: teacher3 },
    { name: 'Pst Jose Mathew', title: 'Teacher', photo: teacher4 },
  ];

  const sundaySchoolPrograms = [
    {
      icon: 'fas fa-child',
      title: 'Children\'s Ministry',
      description: 'Building strong foundations in faith for the next generation through engaging Bible lessons and activities.',
      gradient: 'from-primary to-accent'
    },
    {
      icon: 'fas fa-user-graduate',
      title: 'Youth Ministry',
      description: 'We use this platform to reach the young generation with the pure gospel through open airs and door to door ministry, preparing them for Christ\'s second coming.',
      gradient: 'from-secondary to-golden'
    },
    {
      icon: 'fas fa-users',
      title: 'Adult Ministry',
      description: 'Strengthening mature believers through deeper Bible study and practical Christian living.',
      gradient: 'from-golden to-accent'
    },
  ];

  return (
    <section id="school" className="py-16 bg-light dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader title="Hope for Life Bible College" />

        {/* Graduates Section */}
        <div className="mb-16 mt-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-secondary dark:text-red-light">Our Graduates</h3>
          <div className="flex justify-center mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl">
              <img src={graduatesPhoto} alt="Hope for Life Bible College Graduates" className="w-full h-64 md:h-80 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-primary dark:text-golden mb-2">Class of 2024</h4>
                <p className="text-gray-700 dark:text-gray-300">Equipped ministers ready to impact their communities for God's glory</p>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-secondary dark:text-red-light">Our Teachers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-golden">
                  <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-primary dark:text-golden mb-1">{teacher.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{teacher.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sunday School Programs */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-secondary dark:text-red-light">Sunday School Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sundaySchoolPrograms.map((program, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className={`h-40 bg-gradient-to-br ${program.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                  <i className={`${program.icon} text-6xl ${index === 2 ? 'text-primary' : 'text-white'}`}></i>
                </div>
                <h4 className="text-xl font-bold mb-3 text-primary dark:text-golden">{program.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
