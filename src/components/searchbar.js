import { useState } from "react";
import { Search } from "lucide-react";
import "../styles/_searchbar.scss";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="search-container">
      <Search className="search-icon" size={18} />
      <input
        type="text"
        placeholder="Search here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
}
