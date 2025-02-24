import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"; // Fixed capitalization
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mt-20 mx-auto font-primary caret-violet-700">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
