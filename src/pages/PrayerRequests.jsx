import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const PrayerRequests = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: ''
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.request) {
      setMessage({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setMessage({
        type: 'success',
        text: 'Your prayer request has been submitted successfully. Our prayer team will pray for you.'
      });
      setFormData({ name: '', email: '', request: '' });
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => setMessage(''), 5000);
    }, 1000);
  };

  return (
    <section id="prayer" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeader title="Prayer Requests" />

        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-light dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-6 text-center text-gray-700 dark:text-gray-300">
              We believe in the power of prayer. Submit your prayer request and our prayer team will intercede for you.
            </p>

            {message && (
              <div className={`message ${message.type} mb-4`}>
                <div className="flex items-center justify-between">
                  <span>{message.text}</span>
                  <button
                    onClick={() => setMessage('')}
                    className="ml-4 text-lg font-bold opacity-70 hover:opacity-100"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="prayer-form space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email (Optional)"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <textarea
                  name="request"
                  placeholder="Prayer Request"
                  rows="4"
                  value={formData.request}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-accent text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Submitting...
                  </>
                ) : (
                  'Submit Prayer Request'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
