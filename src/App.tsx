import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./mainapp/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
