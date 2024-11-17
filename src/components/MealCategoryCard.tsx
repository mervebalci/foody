import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { MealCategory } from "../hooks/useMeals";
import { Category } from "../hooks/useCategories";

interface Props {
  meal: MealCategory;
  category: Category;
}

export default function MealCategoryCard({ meal, category }: Props) {
  return (
    <Card>
      <Image
        src={category.strCategoryThumb}
        alt={category.strCategoryDescription}
      />
      <CardBody textAlign={"center"}>
        <Heading fontSize={"2xl"}>{meal.strCategory}</Heading>
      </CardBody>
    </Card>
  );
}
