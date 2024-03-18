import "./App.css";
import Dashboard from "./components/Dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UpdateClient from "./components/UpdateClient";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/update-client" element={<UpdateClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
