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
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <CountryList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <MealCategoryGrid />
      </GridItem>
    </Grid>
  );
}
