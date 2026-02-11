import { Routes, Route, Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookDemo from "./pages/Bookdemo";

import Telemedicine from "./pages/products/Admin";
import HealthRecords from "./pages/products/Records";
import AiAssistant from "./pages/products/ai";
import Care from "./pages/products/Care";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book-demo" element={<BookDemo />} />

        <Route path="products/telemedicine" element={<Telemedicine />} />
        <Route path="products/health-records" element={<HealthRecords />} />
        <Route path="products/ai-assistant" element={<AiAssistant />} />
        <Route path="products/care" element={<Care />} />
      </Route>
    </Routes>
  );
}

export default App;
