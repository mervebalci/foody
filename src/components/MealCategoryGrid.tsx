import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useMeals from "../hooks/useMeals";
import MealCategoryCard from "./MealCategoryCard";
import MealCategoryCardSkeleton from "./MealCategoryCardSkeleton";
import MealCategoryCardContainer from "./MealCategoryCardContainer";

export default function MealCategoryGrid() {
  const { meals, error, isLoading } = useMeals();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <Box
      justifyContent={"center"}
      alignContent={"center"}
      display={"flex"}
      flexWrap={"wrap"}
    >
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={5}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <MealCategoryCardContainer>
              <MealCategoryCardSkeleton key={skeleton} />
            </MealCategoryCardContainer>
          ))}
        {meals.map((meal) => (
          <MealCategoryCardContainer>
            <MealCategoryCard key={meal.idCategory} meal={meal} />
          </MealCategoryCardContainer>
        ))}
      </SimpleGrid>
    </Box>
  );
}
