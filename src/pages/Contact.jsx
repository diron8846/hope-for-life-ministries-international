import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconBox } from '../components/IconBox';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [contactMessage, setContactMessage] = useState('');
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

    if (!formData.firstName || !formData.email || !formData.subject || !formData.message) {
      setContactMessage({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setContactMessage({
        type: 'success',
        text: 'Your message has been sent successfully. We will get back to you soon.'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);

      setTimeout(() => setContactMessage(''), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-light dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader title="Contact Us" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary dark:text-golden">Get In Touch</h3>
            <div className="space-y-6">
              <IconBox icon={() => <i className="fas fa-map-marker-alt"></i>}>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400">Nairobi, Githurai 45, Mwihoko</p>
                </div>
              </IconBox>

              <IconBox icon={() => <i className="fas fa-phone"></i>}>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="tel:+254727691035" className="hover:text-primary dark:hover:text-golden transition-colors">
                      +254 727691035
                    </a>
                  </p>
                </div>
              </IconBox>

              <IconBox icon={() => <i className="fas fa-envelope"></i>}>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="mailto:dismusmutuku@gmail.com" className="hover:text-primary dark:hover:text-golden transition-colors">
                      dismusmutuku@gmail.com
                    </a>
                  </p>
                </div>
              </IconBox>

              <IconBox icon={() => <i className="fas fa-clock"></i>}>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Service Times</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sunday: 10:00 AM<br />Wednesday: 7:00 PM
                  </p>
                </div>
              </IconBox>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary dark:text-golden">Send Us a Message</h3>

            {contactMessage && (
              <div className={`message ${contactMessage.type} mb-4`}>
                <div className="flex items-center justify-between">
                  <span>{contactMessage.text}</span>
                  <button
                    onClick={() => setContactMessage('')}
                    className="ml-4 text-lg font-bold opacity-70 hover:opacity-100"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:border-primary dark:focus:border-golden"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:border-primary dark:focus:border-golden"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:border-primary dark:focus:border-golden"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:border-primary dark:focus:border-golden"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:border-primary dark:focus:border-golden"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-accent text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
