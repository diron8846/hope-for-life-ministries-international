import React from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const Ministries = () => {
  const ministries = [
    {
      icon: 'fas fa-praying-hands',
      title: 'Prayer Ministry',
      description: 'Interceding for the nation, families, and individuals seeking God\'s intervention in their lives.',
      bgColor: 'bg-primary',
      titleColor: 'text-primary dark:text-golden'
    },
    {
      icon: 'fas fa-heart',
      title: 'Outreach Programs',
      description: 'Reaching the lost, feeding the hungry, and caring for the needy in our communities.',
      bgColor: 'bg-secondary',
      titleColor: 'text-secondary dark:text-red-light'
    },
    {
      icon: 'fas fa-users',
      title: 'Leadership Training',
      description: 'Equipping and empowering leaders for effective ministry and kingdom impact.',
      bgColor: 'bg-golden',
      titleColor: 'text-golden',
      textColor: 'text-primary'
    },
  ];

  return (
    <section id="mission" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeader title="Our Ministries" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-light dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <div className={`w-16 h-16 ${ministry.bgColor} text-white rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${ministry.icon} text-2xl`}></i>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${ministry.titleColor}`}>{ministry.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{ministry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
