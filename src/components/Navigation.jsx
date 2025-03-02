const Navigation = ({ children, to = "#" }) => (
  <a className="p-2.5" href={to}>
    {children}
  </a>
);
export default Navigation;
