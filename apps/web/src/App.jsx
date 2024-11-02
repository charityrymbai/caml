import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MainContent from "./Pages/MainContent.jsx";
import Header from "./Components/Header";
import Portal from "./Pages/Portal.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import StudentForm from "./Pages/Profile.jsx"
import OptPage  from "./Pages/OptPage.jsx";
import FileSelector from "./Pages/AddFile.jsx";
import GetLink from "./Pages/AddLink.jsx";
import Lurn from "./Pages/Lurn.jsx";
import Quiz from "./Pages/Quiz.jsx";
import Flashcards from "./Pages/Flashcard.jsx";
import Compare from "./Pages/Compare.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import HashLurn from "./Pages/HashLurn.jsx";
import Filter from "./Pages/Filter.jsx";
import FileInfo from "./Pages/FileInfo.jsx";
function App() {
  return(
    <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/auth" element={<Portal />} />
                    <Route path="/about_us" element={<AboutUs />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<StudentForm/>}/>
                    <Route path="/optpage" element={<OptPage/>}/>
                    <Route path="/addFile" element={<FileSelector/>}/>
                    <Route path="/addlink" element={<GetLink/>}/>
                    <Route path="/lurn" element={<Lurn/>}/>
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/flashcard" element={<Flashcards />} />
                    <Route path="/hashlurn" element={<HashLurn/>}/>
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/filter" element={<Filter/>}/>
                    <Route path="/fileinfo" element={<FileInfo/>}/>
                </Routes>
            </div>
        </Router>
  );
}

export default App
