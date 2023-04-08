import List from "@/components/List";
import Header from "@/components/Header";
import Tooltip from "@/components/Tooltip";
import ScrollButton from "@/components/ScrollButton";

import { ThemeProvider } from "@/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Tooltip />
      <Header />
      <List />
      <ScrollButton />
    </ThemeProvider>
  );
}

export default App;
