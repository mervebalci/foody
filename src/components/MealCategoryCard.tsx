import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { MealCategory } from "../hooks/useMeals";

interface Props {
  meal: MealCategory;
}

export default function MealCategoryCard({ meal }: Props) {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={meal.strCategoryThumb} alt={meal.strCategory} />
      <CardBody textAlign={"center"}>
        <Heading fontSize={"2xl"}>{meal.strCategory}</Heading>
      </CardBody>
    </Card>
  );
}
