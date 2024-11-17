import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useMeals from "../hooks/useMeals";
import MealCategoryCard from "./MealCategoryCard";
import MealCategoryCardSkeleton from "./MealCategoryCardSkeleton";
import MealCategoryCardContainer from "./MealCategoryCardContainer";
import useCategories from "../hooks/useCategories";

export default function MealCategoryGrid() {
  const { data, error, isLoading } = useMeals();
  const { categories } = useCategories();

  console.log(categories);

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
        {data.map((meal, index) => (
          <MealCategoryCardContainer>
            <MealCategoryCard
              key={meal.strCategory}
              meal={meal}
              category={
                categories.find(
                  (category) => meal.strCategory === category.strCategory
                )!
              }
            />
          </MealCategoryCardContainer>
        ))}
      </SimpleGrid>
    </Box>
  );
}
