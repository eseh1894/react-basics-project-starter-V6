import { RecipeListPage } from "./pages/RecipeListPage";
import React, { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // Your state code here
  return (
    <div>
      <RecipeListPage />;
    </div>
  );
};
