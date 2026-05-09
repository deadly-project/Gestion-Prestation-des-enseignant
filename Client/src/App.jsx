import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Login from './Authentification/Login'
import Signin from './Authentification/Sign_in';
import Dashboard from "./component/Dashboard";
import ProtectedRoute from "./component/ProtectRoute";
import AddEnseignant from "./component/Add_enseignant";
import UpdateEnseignant from "./component/Update_enseignant";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/Singin" element={<Signin />} />
        <Route path="/addEnseignant" element={<AddEnseignant />} />
        <Route path="/update/:id" element={<UpdateEnseignant />} />
        <Route
          path="/dashboard"
          element={
          <ProtectedRoute >
              <Dashboard />
          </ProtectedRoute >
          }
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App
