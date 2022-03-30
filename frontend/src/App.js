import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventory from "./screens/InventorySystem/Inventory";


const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
      <Route path="/" element={<LandingPage />} exact></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
