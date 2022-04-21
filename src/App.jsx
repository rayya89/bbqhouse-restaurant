//NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Project files
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          {/* <Route path="Menu/" element={<MenuPage/>}/> */}
        </Routes>
      </BrowserRouter>
     </div>
  );
}

