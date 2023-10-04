import React from "react";
import {
  IconButton,
  Box,
  Flex,
  Text,
  Spacer,
  Image,
  VStack,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export function RecipePage({ recipe, onBack }) {
  return (
    <Box p="4" position="relative">
      <Flex align="center" mb="4">
        <IconButton
          aria-label="Back to Recipe List"
          icon={<ArrowBackIcon />}
          onClick={onBack}
          variant="outline"
          colorScheme="purple"
        />
        <Spacer />
        <Text fontSize="lg" fontWeight="bold">
          {recipe.label}
        </Text>
        <Spacer />
      </Flex>
      <Flex>
        <Box flex="1">
          <Image
            src={recipe.image}
            alt={recipe.label}
            maxH="400px"
            maxW="100%"
          />
          <Text mt="4">Yield: {recipe.yield}</Text>
          <Text>Meal Type: {recipe.mealType}</Text>
        </Box>
        <VStack flex="1" align="start">
          <Text>Diet Labels: {recipe.dietLabels.join(", ")}</Text>
          <Text mt="4">Health Labels:</Text>
          <Box className="health-labels">
            {recipe.healthLabels.map((label, index) => (
              <Box
                key={index}
                bg="purple.500"
                color="white"
                borderRadius="md"
                display="inline-block"
                padding="5px 10px"
                marginRight="5px"
              >
                {label}
              </Box>
            ))}
          </Box>
        </VStack>
      </Flex>
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
    </Box>
  );
}
