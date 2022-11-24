const Header = ({ title, length }) => {
  return (
    <header>
      <h2>{title}</h2>
      <span className="badge rounded-pill bg-light text-dark">{length}</span>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
