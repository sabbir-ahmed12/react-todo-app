const Footer = () => {
  const today = new Date();

  return (
    <footer className="d-flex justify-content-center">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
