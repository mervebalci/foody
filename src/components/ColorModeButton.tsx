import { Button, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button margin={4} onClick={toggleColorMode}>
      {colorMode === "dark" && <FaSun color="khaki" />}
      {colorMode === "light" && <FaMoon color="slateblue" />}
    </Button>
  );
}
