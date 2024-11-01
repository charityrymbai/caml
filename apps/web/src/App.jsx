import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MainContent from "./Pages/MainContent.jsx";
import Header from "./Components/Header";
import Portal from "./Pages/Portal.jsx";
import StudentForm from "./Pages/Profile.jsx"
import LearningPage  from "./Pages/Direct.jsx";
function App() {
  return(
    <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/auth" element={<Portal />} />
                    <Route path="/profile" element={<StudentForm />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                    <Route path="/direct" element={<LearningPage/>}/>
                </Routes>
            </div>
        </Router>
  );
}

export default App
