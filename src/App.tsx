import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
        <GridItem bg={"green.400"} area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg={"yellow.400"} area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}
