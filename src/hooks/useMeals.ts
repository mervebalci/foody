import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface MealCategory {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

interface FetchCategoriesResponse {
  categories: MealCategory[];
}

const useMeals = () => {
  const [meals, setMeals] = useState<MealCategory[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    apiClient
      .get<FetchCategoriesResponse>("/categories.php", { signal: signal })
      .then((res) => setMeals(res.data.categories))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

    return () => controller.abort();
  }, []);

  return { meals, error }
}

export default useMeals;