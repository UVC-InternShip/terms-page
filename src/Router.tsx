import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Terms } from "./pages/Terms";

const Router = () => {
  return (
    <BrowserRouter basename="/terms-page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms/*" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
