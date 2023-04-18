import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header'
import Index from './components/Index'
import Footer from "./components/Footer";

function App() {
    return (
        <>

            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>
                <Footer/>
            </Router>

        </>
    );
}

export default App;
