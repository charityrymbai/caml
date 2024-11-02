import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MainContent from "./Pages/MainContent.jsx";
import Header from "./Components/Header";
import Portal from "./Pages/Portal.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import StudentForm from "./Pages/Profile.jsx"
import OptPage  from "./Pages/OptPage.jsx";
import FileSelector from "./Pages/Selector.jsx";
import Lurn from "./Pages/Welcome.jsx";
import Filter from "./Pages/Filter.jsx";
function App() {
  return(
    <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/auth" element={<Portal />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<StudentForm/>}/>
                    <Route path="/optpage" element={<OptPage/>}/>
                    <Route path="/selector" element={<FileSelector/>}/>
                    <Route path="/lurn" element={<Lurn/>}/>
                    <Route path="/filter" element={<Filter/>}/>
                </Routes>
            </div>
        </Router>
  );
}

export default App
