import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MealCategoryGrid from "./components/MealCategoryGrid";
import CountryList from "./components/CountryList";

export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <CountryList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <MealCategoryGrid />
      </GridItem>
    </Grid>
  );
}
