

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
import Registration from './components/pages/Auth/Registration';
import Otp from "./components/pages/Auth/Otp";
import Login from "./components/pages/Auth/Login";
import ForgotPassword from "./components/pages/Auth/ForgotPassword";
import ChangePassword from "./components/pages/Auth/ChangePassword";
import Home from "./components/pages/Home/Home";
import User from "./components/pages/User/User";
import Category from "./components/pages/Category/Category";
import AddCategory from "./components/pages/Category/AddCategory";
import SubCategory from "./components/pages/SubCategory/SubCategory";
import AddSubCategory from "./components/pages/SubCategory/AddSubCategory";
import AddProduct from "./components/pages/Product/AddProduct";
import AddStore from "./components/pages/Store/AddStore";
import AddVariant from "./components/pages/variant/AddVariant";
import AddDiscount from './components/pages/Discount/AddDiscount'
import Affiliate from './components/pages/Affiliate/Affiliate'


const router = createBrowserRouter(
  createRoutesFromElements(
  <>
     <Route path="/" element={<Registration />} />
     <Route  path="/otp/:email" element={<Otp />} />
     <Route  path="/login" element={<Login />} />
     <Route  path="/forgotpassword" element={<ForgotPassword />} />
     <Route  path="/changepassword/:email" element={<ChangePassword />} />

   <Route   path="/home"  element={<Home />}  >
     <Route  path="userlist" element={<User />} />

     <Route  path="category" element={<Category />} />
     <Route  path="addcategory" element={<AddCategory />} />

     <Route  path="subcategory" element={<SubCategory />} />
     <Route  path="addsubcategory" element={<AddSubCategory />} />
     
     <Route  path="addproduct" element={<AddProduct/> } />
     <Route  path="addvariant" element={<AddVariant/> } />

     <Route  path="adddiscount" element={<AddDiscount/> } />
     <Route  path="affiliate" element={<Affiliate/> } />


     <Route  path="addstore" element={<AddStore/> } />
   </Route>
  </>
  )
);

function App() {
 

  return (
  <RouterProvider router={router} />
)
}

export default App
