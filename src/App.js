import {  Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AllMetaData from "./pages/AllMetaData";
import AllRecords from "./pages/AllRecords";
import Alltables from "./pages/Alltables";
import Dashboard from "./pages/Dashboard";
import Management from "./pages/Management";
import  "./App.css";

function App() {
  return (
    <div className="App">
      
        <Sidebar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/allrecords" element={<AllRecords />} />
            <Route path="/tables" element={<Alltables />} />
            <Route path="/management" element={<Management />} />
            <Route path="/allmetadata" element={<AllMetaData />} />
          </Routes>
        </Sidebar>
      
    </div>
  );
}

export default App;
