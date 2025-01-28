import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center bg-secondary rounded-lg p-1 space-x-2">
      <SearchIcon className="text-textIcon" />
      <input
        type="text"
        placeholder="Search"
        className="w-full text-textIcon  outline-none bg-transparent"
      />
    </div>
  );
};

export default Search;
