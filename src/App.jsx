//NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Project files
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="menu/" element={<MenuPage/>}/>
          <Route path="menu/category/:categoryId" element={<CategoryPage />} />
          <Route path="menu/category/:categoryId/:productId" element={<ProductPage />} />
          <Route path="contact/" element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
     </div>
  );
}

