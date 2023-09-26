import { useState } from "react";
import { TextInput } from "./ui/TextInput";

export const SearchBar = ({ onSearch }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchField(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <>
      <label>Search Recipes</label>
      <TextInput changeFn={handleChange} />
    </>
  );
};
