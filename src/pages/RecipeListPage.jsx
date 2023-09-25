import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { SearchBar } from "../components/SearchBar";

export function RecipeListPage() {
  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);

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
    setFilteredRecipes(filtered);
  };
  const handleBackClick = () => {
    setSelectedRecipe(null);
  };
  return (
    <div>
      <h1>Recipe List</h1>
      <Center bgColor={"blackAlpha.300"} flexDirection="column" gap={8}>
        <Heading>Your Recipe App</Heading>

        <SearchBar onSearch={handleSearch} />
        <SimpleGrid columns={4} spacing={4}>
          {data.hits.map((hit, index) => (
            <RecipeCard key={index} recipe={hit.recipe} />
          ))}
        </SimpleGrid>
      </Center>
    </div>
  );
}
