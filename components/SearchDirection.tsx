import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "./ui/input";

const SearchDirection: FC<SearchDirectionProps> = ({ query, setQuery }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input
          value={query}
          onChange={handleSearchChange}
          placeholder="Search"
          className="w-[300px] h-[48px] py-[12px] px-[16px] pl-[40px] gap-[14px] rounded-full border border-[#EAECF0] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-[#F4F6F7]"
        />
      </div>
    </div>
  );
};

export default SearchDirection;
