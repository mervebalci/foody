import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/foodyLogo.webp";
import ColorModeButton from "./ColorModeButton";

export default function NavBar() {
  return (
    <HStack justifyContent={"space-between"}>
      <HStack>
        <Image margin={3} boxSize={"60px"} src={logo} alt="foody logo" />
        <Text as={"b"} color={"tomato"} fontSize={"xl"}>
          Foody
        </Text>
      </HStack>
      <ColorModeButton />
    </HStack>
  );
}
