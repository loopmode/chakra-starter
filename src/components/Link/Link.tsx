import { Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

export function Link(props: React.ComponentProps<typeof ChakraLink>) {
  return <ChakraLink as={RouterLink} {...props} />;
}
