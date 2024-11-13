import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function MealCategoryCardSkeleton() {
  return (
    <Card>
      <Skeleton height={145} width={"300px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
