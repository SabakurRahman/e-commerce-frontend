import { createBrowserRouter,Route,createRoutesFromElements, Navigate, } from "react-router-dom";
import Login from "./views/login";
import Signup from "./views/Signup";
import User from "./views/User";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Navigate to="/user"/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/user' element={<User/>} />
        </Route>
        <Route path='/' element={<GuestLayout/>}>
           <Route path="/login" element={<Login/>} />
           <Route path="/signup" element={<Signup/>} />
        </Route>
     
       
       <Route path='*' element={<NotFound/>} />


      </>
      
    )
    );

export default router;