import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AppLayout } from "./components/AppLayout/AppLayout";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </ChakraProvider>
);
