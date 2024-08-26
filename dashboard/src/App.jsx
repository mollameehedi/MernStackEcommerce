

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Registration from './components/pages/Registration';
import Otp from "./components/pages/Otp";
import Login from "./components/pages/Login";
import ForgotPassword from "./components/pages/ForgotPassword";
import ChangePassword from "./components/pages/ChangePassword";


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
     <Route  path="/" element={<Registration />} />
     <Route  path="/otp/:email" element={<Otp />} />
     <Route  path="/login" element={<Login />} />
     <Route  path="/forgotpassword" element={<ForgotPassword />} />
     <Route  path="/changepassword/:email" element={<ChangePassword />} />
   </Route>
  )
);

function App() {
 

  return (
  <RouterProvider router={router} />
)
}

export default App
