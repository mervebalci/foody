import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface MealCategory {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

interface FetchCategoriesResponse {
  categories: MealCategory[];
}

export default function MealCategoryGrid() {
  const [meals, setMeals] = useState<MealCategory[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchCategoriesResponse>("/categories.php")
      .then((res) => setMeals(res.data.categories))
      .catch((err) => setError(err.message));
  }, []);

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
