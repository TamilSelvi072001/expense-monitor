import { BrowserRouter,  Route, Routes } from "react-router-dom";
import React from "react";

const Login = React.lazy(() => import("./LoginPage/Login"));
const Signup = React.lazy(() => import("./LoginPage/Signup"));
const MainPage=React.lazy(()=>import("./LandingPage/MainPage"))

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" name="Login" element={<Login />} />
          <Route exact path="/signup" name="Signup" element={<Signup />} />
          <Route path="/mainpage" name="MainPage" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
