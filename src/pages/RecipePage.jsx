import React from "react";

export function RecipePage({ recipe, onBack }) {
  return (
    <div>
      <button onClick={onBack}>Back to Recipe List</button>
      <h1>{recipe.label}</h1>
      <img src={recipe.image} alt={recipe.label} />
      <p>Yield: {recipe.yield}</p>
      <p>Diet Labels: {recipe.dietLabels.join(", ")}</p>
      <p>Health Labels: {recipe.healthLabels.join(", ")}</p>
      <p>Cautions: {recipe.cautions.join(", ")}</p>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Total Cooking Time: {recipe.totalTime} minutes</p>
      <h2>Total Nutrients:</h2>
      <ul>
        <li>Energy (kcal): {recipe.totalNutrients.ENERC_KCAL?.quantity}</li>
        <li>Fat (g): {recipe.totalNutrients.FAT?.quantity}</li>
        <li>Protein (g): {recipe.totalNutrients.PROCNT?.quantity}</li>
        <li>Carbs (g): {recipe.totalNutrients.CHOCDF?.quantity}</li>
        <li>Cholesterol (mg): {recipe.totalNutrients.CHOLE?.quantity}</li>
        <li>Sodium (mg): {recipe.totalNutrients.NA?.quantity}</li>
      </ul>
    </div>
  );
}
