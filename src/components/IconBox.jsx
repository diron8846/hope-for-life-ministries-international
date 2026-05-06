export const IconBox = ({ icon: Icon, children }) => (
  <div className="flex items-center">
    <div className="icon-3d mr-4">
      <Icon />
    </div>
    <div>{children}</div>
  </div>
);
