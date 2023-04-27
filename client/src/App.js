import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import GlobalStyles from "./GobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/projectFred/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
