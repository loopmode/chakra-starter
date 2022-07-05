import { Box, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { AppMenu } from "../AppMenu/AppMenu";

export function AppLayout() {
  return (
    <div>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={8}>
        <AppMenu />
      </Box>
      <Box px={8} mt={4}>
        <Outlet />
      </Box>
    </div>
  );
}
