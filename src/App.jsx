//NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Project files
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="menu/" element={<MenuPage/>}/>
          <Route path="menu/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
     </div>
  );
}

