import Footer from "./components/Footer";
import Men from "./components/Men";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/HOME" element={<Men/>}/>
          <Route path="/Men" element={<Men />} />
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
