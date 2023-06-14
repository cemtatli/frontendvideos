import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import List from "@/components/List";
import Channel from "@/components/Channel";
import Error404 from "@/components/Error404";
import Header from "@/components/Header";
import Tooltip from "@/components/Tooltip";

import { ThemeProvider } from "@/context/ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Tooltip />
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/Channel" element={<Channel />} />
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
