import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventory from "./screens/InventorySystem/Inventory";
import Test from "./components/TestComponent/test"
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";


const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} exact></Route>
        <Route path="/login" element={<LoginScreen />} exact></Route>
        <Route path="/register" element={<RegisterScreen />} exact></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
