import { SimpleGrid, Text } from "@chakra-ui/react";
import useMeals from "../hooks/useMeals";
import MealCategoryCard from "./MealCategoryCard";

export default function MealCategoryGrid() {
  const { meals, error } = useMeals();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={5}
        spacing={6}
      >
        {meals.map((meal) => (
          <MealCategoryCard key={meal.idCategory} meal={meal} />
        ))}
      </SimpleGrid>
    </>
  );
}
