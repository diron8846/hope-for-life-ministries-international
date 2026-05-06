import React from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const Events = () => {
  const events = [
    {
      icon: 'fas fa-church',
      category: 'SUNDAY SERVICE',
      title: 'Weekly Worship Service',
      description: 'Join us every Sunday for worship, fellowship, and the Word of God.',
      time: 'Every Sunday, 10:00 AM',
      gradient: 'from-primary to-accent'
    },
    {
      icon: 'fas fa-book-open',
      category: 'BIBLE STUDY',
      title: 'Midweek Bible Study',
      description: 'Dive deeper into God\'s Word with interactive study sessions.',
      time: 'Every Wednesday, 7:00 PM',
      gradient: 'from-secondary to-primary'
    },
    {
      icon: 'fas fa-hands-helping',
      category: 'OUTREACH',
      title: 'Community Outreach',
      description: 'Monthly outreach to serve our local community with love and care.',
      time: 'First Saturday of Each Month',
      gradient: 'from-golden to-accent',
      iconColor: 'text-primary'
    },
  ];

  return (
    <section id="events" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeader title="Upcoming Events" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {events.map((event, index) => (
            <div key={index} className="event-card bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${event.gradient} flex items-center justify-center`}>
                <i className={`${event.icon} text-6xl text-white ${event.iconColor}`}></i>
              </div>
              <div className="p-6">
                <div className="text-secondary dark:text-red-light text-sm font-semibold mb-2">{event.category}</div>
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-golden">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <i className="fas fa-calendar mr-2"></i>
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
