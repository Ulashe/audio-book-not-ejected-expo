import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/components/theme";
import Navigation from "./src/navigators/navigation";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
