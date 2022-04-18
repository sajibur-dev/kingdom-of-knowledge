import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import Blogs from "./Pages/Blogs/Blogs";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div>
      <Header/>
      <main className="md:max-w-7xl md:mx-auto">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/checkout" element={<RequireAuth> <Checkout/></RequireAuth>}/>
          <Route path="/regester" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      
      <Footer/>      
    </div>
  );
}

export default App;
