import { RecipeListPage } from "./pages/RecipeListPage";
import React, { useState } from "react";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // Your state code here
  return (
    <div>
      {selectedRecipe ? (
        <RecipePage
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)} 
        />
      ) : (
        <RecipeListPage
          selectedRecipe={selectedRecipe}
          onRecipeSelect={(recipe) => setSelectedRecipe(recipe)} 
        />
      )}
    </div>
  );
};
