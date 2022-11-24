const SearchItem = ({ search, setSearch }) => {
  return (
    <form
      className="container d-flex align-content-center my-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="form-control"
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
