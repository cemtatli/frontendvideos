import List from "@/components/List";
import Header from "@/components/Header";
import Tooltip from "@/components/Tooltip";

import { ThemeProvider } from "@/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Tooltip />
      <Header />
      <List />
    </ThemeProvider>
  );
}

export default App;
