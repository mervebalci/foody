import { Text } from "@chakra-ui/react";
import useMeals from "../hooks/useMeals";

export default function MealCategoryGrid() {
  const { meals, error } = useMeals();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {meals.map((meal) => (
          <li key={meal.idCategory}>{meal.strCategory}</li>
        ))}
      </ul>
    </>
  );
}
