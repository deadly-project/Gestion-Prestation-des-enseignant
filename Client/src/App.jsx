import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Login from './Authentification/Login'
import Signin from './Authentification/Sign_in';
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/Singin" element={<Signin />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App
