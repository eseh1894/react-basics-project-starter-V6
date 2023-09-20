import { Box, Text, Image, Badge, Flex } from "@chakra-ui/react";

export function RecipeCard({ recipe }) {
  return (
    <Box
      spacing={10}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      cursor="pointer"
    >
      <Image src={recipe.image} alt={recipe.label} />

      <Box p="6">
        <Text fontWeight="semibold" fontSize="lg" mb="2">
          {recipe.label}
        </Text>
        {recipe.dietLabels.length > 0 && (
          <Badge colorScheme="green" mb="2">
            {recipe.dietLabels[0]}
          </Badge>
        )}
        <Text fontSize="sm" color="gray.500">
          Meal Type: {recipe.mealType.join(", ")}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Dish Type: {recipe.dishType.join(", ")}
        </Text>
        <Text fontSize="sm" color="gray.500" mt="2">
          Health Labels: {recipe.healthLabels.join(", ")}
        </Text>
      </Box>
    </Box>
  );
}
