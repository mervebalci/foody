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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);

    apiClient
      .get<FetchCategoriesResponse>("/categories.php", { signal: signal })
      .then((res) => {
        setMeals(res.data.categories);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { meals, error, isLoading };
}

export default useMeals;