import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import pastorPhoto from '../assets/pastor-photo.jpg';

export const About = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="about" className="py-16 bg-light dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader title="About Us" />

        {/* Pastor Profile Section */}
        <div className="flex flex-col items-center mb-12 mt-12">
          <div className="relative mb-6">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-golden shadow-2xl">
              <img src={pastorPhoto} alt="Pastor Dismus Mutuku" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-golden mb-2">
              Pastor Dismus Mutuku
            </h3>
            <p className="text-lg text-secondary dark:text-red-light font-semibold">Senior Pastor & Founder</p>
            <p className="text-base text-gray-600 dark:text-gray-400 italic">Hope for Life Jesus Ministry</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-start">
          <div ref={leftRef} className="animate-slide-in-left">
            <p className="text-lg mb-6 leading-relaxed">
              Pastor Dismus Mutuku has been at the forefront of missions, from cities to villages, with a deep
              burden to see people receive the Kingdom of God, set free and filled by the Holy Spirit. He has raised
              ministers through organized Missions, Conference and Revival Meetings.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Our Ministry Centre is located at Nairobi, Githurai 45, Mwihoko. Hope For Life Ministry strength is
              based on biblical truths that enhance the revelation of Kingdom through the Graces given by the Holy
              Ghost. We stand by Practicing Faith, Prayer and the word.
            </p>
            <h3 className="text-xl font-bold mb-3 header-underline-left text-secondary dark:text-red-light">
              Our Vision
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Reaching out for Lost Souls</li>
              <li>Preaching/Teaching the word of God</li>
              <li>Empowering Body of Christ</li>
              <li>Preparing Church for the Second Coming of Christ</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 header-underline-left text-secondary dark:text-red-light">
              Our Mission
            </h3>
            <p className="text-lg font-semibold text-primary dark:text-golden">"Reaching, Equipping (Training), Empowering and Sending"</p>
          </div>

          <div ref={rightRef} className="space-y-6 animate-slide-in-right">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-golden">
              <h3 className="text-xl font-bold mb-4 text-primary dark:text-golden flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>The Call
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I had a dream which changed my life. I was sleeping one night I saw Jesus coming to me: He was
                dressed in white apparel holding a Bible. When He reached where I was, he opened the Bible in the book
                Luke 4:18.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-secondary">
              <h3 className="text-xl font-bold mb-4 text-secondary dark:text-red-light flex items-center">
                <i className="fas fa-heart mr-2"></i>The Purpose
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To spread the Gospel of Jesus Christ and make disciples who will impact their communities for God's
                glory.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-accent">
              <h3 className="text-xl font-bold mb-4 text-accent dark:text-accent flex items-center">
                <i className="fas fa-dove mr-2"></i>The Promise
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Through the power of the Holy Spirit, we witness transformed lives and communities touched by God's
                love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
