import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function MealCardSkeleton() {
  return (
    <Card width={290} borderRadius={10} overflow={"hidden"}>
      <Skeleton height={170} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
