export default function SearchBar({ setSearch }) {
  return (
    <div className="search-panel">
      <input
        className="search-input"
        placeholder="Search by Name or USN"
        onChange={e => setSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
}
