import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { SearchBar } from "../components/SearchBar";
import { RecipePage } from "./RecipePage";

export function RecipeListPage() {
  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);
  const [selectedRecipe, setSelectedRecipe] = useState(data.hits);

  const handleSearch = (searchTerm) => {
    const filteredRecipes = data.hits.filter((hit) => {
      const recipe = hit.recipe;
      const { label, healthLabels } = recipe;

      return (
        label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        healthLabels.some((label) =>
          label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });
    setFilteredRecipes(filteredRecipes);
  };
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };
  return (
    <div>
      <Center bgColor={"blackAlpha.300"} flexDirection="column" gap={8}>
        <Heading>Your Recipe App</Heading>

        <SearchBar onSearch={handleSearch} />
        <SimpleGrid columns={4} spacing={4}>
          {filteredRecipes.map((hit, index) => (
            <RecipeCard
              key={index}
              recipe={hit.recipe}
              onClick={() => handleRecipeClick(hit.recipe)}
            />
          ))}
        </SimpleGrid>
      </Center>
      <RecipePage
        recipe={selectedRecipe}
        onBack={() => setSelectedRecipe(null)}
      />
    </div>
  );
}
