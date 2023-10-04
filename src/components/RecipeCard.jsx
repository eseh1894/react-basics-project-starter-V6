import { Box, Text, Image, Badge, Flex, SimpleGrid } from "@chakra-ui/react";

export function RecipeCard({ recipe, onClick }) {
  const cardHeight = "300px";
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        onClick={onClick}
      >
        <Flex flexWrap="wrap" justify="space-between">
          <Box
            spacing={10}
            maxW="xs"
            marginBottom="20px"
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            cursor="pointer"
            height={450}
          >
            <Image
              src={recipe.image}
              alt={recipe.label}
              height={200}
              width={500}
            />

            <Box p="6">
              <Text fontWeight="semibold" fontSize="xl" mb="2">
                {recipe.label}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {recipe.mealType.join(", ")}
              </Text>
              <Flex flexDirection="column">
                {recipe.healthLabels.includes("Vegetarian") && (
                  <Badge colorScheme="purple" mb="2" size="sm">
                    {" "}
                    Vegetarian{" "}
                  </Badge>
                )}
                {recipe.healthLabels.includes("Vegan") && (
                  <Badge colorScheme="purple" mb="2">
                    {" "}
                    Vegan{" "}
                  </Badge>
                )}
              </Flex>
              {recipe.dietLabels.length > 0 && (
                <Badge colorScheme="green" mb="2">
                  {recipe.dietLabels[0]}
                </Badge>
              )}

              <Text fontSize="sm" color="black.800">
                Dish: {recipe.dishType.join(", ")}
              </Text>
              <Text fontSize="sm" color="gray.500" mt="2" colorScheme="green">
                Cautions: {recipe.cautions.join(", ")}
              </Text>
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>
    </>
  );
}
