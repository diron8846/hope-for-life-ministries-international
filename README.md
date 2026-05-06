# Hope for Life Jesus Ministry Website

> A modern, responsive React-based website for Hope for Life Jesus Ministry built with React, Vite, and Tailwind CSS.

**Live Website**: https://diron8846.github.io/hope-for-life-ministries-international/

## Features

- ⚛️ **React-powered** - Modern JavaScript framework for dynamic, interactive UI
- ⚡ **Vite** - Next-generation frontend build tool with hot module replacement
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🌓 **Dark/Light Mode** - Toggle theme with localStorage persistence
- 📱 **Mobile Responsive** - Fully responsive design for all devices
- 🎯 **Component-based** - Reusable, maintainable components
- 🔄 **Context API** - State management for theme switching
- ⚡ **Performance Optimized** - Fast load times and smooth interactions

## Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navigation.jsx
│   ├── SectionHeader.jsx
│   ├── IconBox.jsx
│   └── FloatingActionButton.jsx
├── context/             # React Context for state management
│   └── ThemeContext.jsx
├── hooks/               # Custom React hooks
│   └── useScrollAnimation.js
├── pages/               # Page/section components
│   ├── Hero.jsx
│   ├── BibleVerse.jsx
│   ├── About.jsx
│   ├── Pastors.jsx
│   ├── Ministries.jsx
│   ├── BibleCollege.jsx
│   ├── Gallery.jsx
│   ├── Testimonials.jsx
│   ├── Events.jsx
│   ├── PrayerRequests.jsx
│   ├── Partnership.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── assets/              # Images and static assets
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles and Tailwind directives
```

## Sections

- **Hero** - Welcome section with ministry tagline
- **Bible Verse** - Featured scripture with background
- **About Us** - Pastor profile and ministry history
- **Pastors** - Leadership team profiles
- **Ministries** - Prayer, Outreach, and Leadership Training
- **Bible College** - Faculty, graduates, and Sunday school programs
- **Gallery** - Photo gallery with modal viewer
- **Testimonials** - Ministry testimonials
- **Events** - Upcoming services and events
- **Prayer Requests** - Prayer request form with validation
- **Partnership** - Partnership opportunities
- **Contact** - Contact form and information
- **Footer** - Links and social media

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **State Management**: React Context API
- **Icons**: Font Awesome 6

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

### Run Dev Server
```bash
npm run dev
```
The app will open at `http://localhost:3000` with hot module replacement enabled.

### Build for Production
```bash
npm run build
```
This creates optimized production files in the `dist/` directory.

## Features Implemented

- ✅ Dark/Light theme toggle with localStorage persistence
- ✅ Mobile-responsive navigation with slide menu
- ✅ Smooth scroll navigation
- ✅ Scroll reveal animations on page load
- ✅ Gallery with image modal functionality
- ✅ Prayer request form with validation and feedback
- ✅ Contact form with validation and feedback
- ✅ 3D icon effects in contact section
- ✅ Parallax effects on hero section
- ✅ Floating action button for prayer requests
- ✅ Fully responsive design (mobile-first approach)
- ✅ Accessibility features

## Component Architecture

### Context
- **ThemeContext** - Manages dark/light mode state globally

### Custom Hooks
- **useScrollAnimation** - Triggers animations when elements enter viewport

### Core Components
- **Navigation** - Header with mobile menu and theme toggle
- **SectionHeader** - Reusable section title with underline
- **IconBox** - Wrapper for 3D icons

### Page Components
Each section is organized as a separate component for maintainability.

## Styling

The project uses **Tailwind CSS** with custom theme extensions:

```js
colors: {
  primary: '#7C3AED',      // Deep purple
  secondary: '#059669',    // Green
  accent: '#A855F7',       // Light purple
  golden: '#10B981',       // Emerald green
  'golden-dark': '#047857', // Dark green
  'red-light': '#34D399',  // Light green
  light: '#F8FAFC'         // Light background
}
```

## Contact Information

- **Phone**: +254 727691035
- **Email**: dismusmutuku@gmail.com
- **Location**: Nairobi, Githurai 45, Mwihoko

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Production bundle size: ~183 KB (JS) / 23 KB (CSS)
- Gzip size: ~57 KB (JS) / 5.1 KB (CSS)
- Lighthouse scores: 90+ (Performance, Accessibility, Best Practices, SEO)

## Future Enhancements

- Add email integration for forms
- Implement analytics
- Add blog section
- Multi-language support
- Social media feed integration
- Event calendar

## Migration Notes

This project was migrated from vanilla HTML/CSS/JavaScript to React for:
- Better maintainability
- Component reusability
- Improved performance
- Easier feature additions
- Better state management

All original functionality and features have been preserved.

## Credits

**Designed & Developed by**: @coder_x

---

© 2025 Hope for Life Jesus Ministry. All rights reserved.
