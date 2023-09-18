import React from "react";
import { data } from "../utils/data";
import RecipeCard from "../components/RecipeCard";

function RecipeListPage() {
  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {data.hits.map((hit, index) => (
          <RecipeCard key={index} recipe={hit.recipe} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeListPage;
