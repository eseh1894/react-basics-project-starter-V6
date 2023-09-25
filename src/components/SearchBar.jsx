import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";

export const SearchBar = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hit.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLocaleLowerCase());
  });
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search Recipes</label>
      <TextInput changeFn={handleChange} />
    </>
  );
};
