import useData from "./useData";

export interface MealCategory {
  strCategory: string;
}

const useMeals = () => useData<MealCategory>("/list.php?c=list");

export default useMeals;