import React from "react";
import { data } from "../utils/data";

function RecipeListPage() {
  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {data.hits.map((hit, index) => {
          const recipe = hit.recipe;
          return (
            <li key={index}>
              <h2>{recipe.label}</h2>
              <img src={recipe.image} alt={recipe.label} />
              {recipe.dietLabels.length > 0 && (
                <p>Diet Label: {recipe.dietLabels.join(", ")}</p>
              )}
              {recipe.cautions.length > 0 && (
                <p>Cautions: {recipe.cautions.join(", ")}</p>
              )}
              <p>Meal Type: {recipe.mealType.join(", ")}</p>
              <p>Dish Type: {recipe.dishType.join(", ")}</p>
              <p>Health Labels: {recipe.healthLabels.join(", ")}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeListPage;
