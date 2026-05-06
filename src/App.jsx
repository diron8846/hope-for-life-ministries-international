import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './pages/Hero';
import { BibleVerse } from './pages/BibleVerse';
import { About } from './pages/About';
import { Pastors } from './pages/Pastors';
import { Ministries } from './pages/Ministries';
import { BibleCollege } from './pages/BibleCollege';
import { Gallery } from './pages/Gallery';
import { Testimonials } from './pages/Testimonials';
import { Events } from './pages/Events';
import { PrayerRequests } from './pages/PrayerRequests';
import { Partnership } from './pages/Partnership';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import FloatingActionButton from './components/FloatingActionButton';

function App() {
  return (
    <div className="bg-light dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Navigation />
      <Hero />
      <BibleVerse />
      <About />
      <Pastors />
      <Ministries />
      <BibleCollege />
      <Gallery />
      <Testimonials />
      <Events />
      <PrayerRequests />
      <Partnership />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default App;
