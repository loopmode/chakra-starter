import { Flex, HStack, Spacer } from "@chakra-ui/react";

import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";
import { Link } from "../Link/Link";

export function AppMenu() {
  return (
    <Flex>
      <HStack spacing={8}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/nothing-here">Nothing Here</Link>
      </HStack>

      <Spacer />

      <ColorModeSwitcher marginLeft="auto" justifySelf="flex-end" />
    </Flex>
  );
}
