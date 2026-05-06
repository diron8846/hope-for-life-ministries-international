export const SectionHeader = ({ title, className = '' }) => (
  <div className={className}>
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-primary dark:text-golden">
      {title}
    </h2>
    <div className="header-underline"></div>
  </div>
);
