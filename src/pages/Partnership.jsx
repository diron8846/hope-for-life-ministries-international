import React from 'react';

export const Partnership = () => {
  const partnershipOptions = [
    {
      icon: 'fas fa-hands-helping',
      title: 'Financial Support',
      description: 'Support our ministry through financial contributions'
    },
    {
      icon: 'fas fa-pray',
      title: 'Prayer Support',
      description: 'Join our prayer network and intercede for the ministry'
    },
    {
      icon: 'fas fa-user-friends',
      title: 'Volunteer',
      description: 'Use your gifts and talents to serve in various capacities'
    },
  ];

  return (
    <section id="partner" className="donation-bg py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us</h2>
        <div className="header-underline"></div>

        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-xl mb-8">
            Your partnership enables us to reach more souls, train leaders, and impact communities for Christ. Join us in this divine mission.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {partnershipOptions.map((option, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <i className={`${option.icon} text-4xl mb-4`}></i>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-primary hover:bg-golden hover:text-white font-semibold rounded-lg transition-all transform hover:scale-105"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};
