export default function SearchForm({filters, placeholder}) {
  return (
    <form action="" className="search-form">
      <input type="text" placeholder={placeholder} />
      <div className="filter-dropdown-container">
        <p>Filter by:</p>
        {filters.map((filter, i) => (
          <button key={i}>{filter.toUpperCase()}</button>
        ))}
      </div>
    </form>
  );
}
