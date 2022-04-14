import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from "./components/TestComponent/test"
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import MyInventorys from "./screens/InventorySystem/MyInventorys";
import CreateInventory from "./screens/CreateInventory/CreateInventory";
import SingleInventory from "./screens/SingleInventory/SingleInventory";
import { useState } from "react";

const App = () => {

  const [search, setsearch] = useState("")
  
  return (
    <BrowserRouter>
      <Header setseaarch={setsearch} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact></Route>
          <Route path="/login" element={<LoginScreen />} exact></Route>
          <Route path="/register" element={<RegisterScreen />} exact></Route>
          <Route
            path="/inventory"
            element={<MyInventorys search={search} />}
            exact
          ></Route>
          <Route
            path="/createinventory"
            element={<CreateInventory />}
            exact
          ></Route>
          <Route
            path="/inventory/:id"
            element={<SingleInventory />}
            exact
          ></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
