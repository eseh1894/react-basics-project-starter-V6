import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";

export const SearchBar = ({ onSearch }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });
  const handleChange = (handleSearch) => {
    setSearchField(handleSearch.target.value);
  };

  return (
    <>
      <label>Search Recipes</label>
      <TextInput changeFn={handleChange} />
    </>
  );
};
