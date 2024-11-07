import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MealCategoryCardContainer({ children }: Props) {
  return (
    <Box width={290} borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
}