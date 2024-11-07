import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function MealCategoryCardSkeleton() {
  return (
    <Card>
      <Skeleton height={170} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
