import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemporaryLanding from './pages/TemporaryLanding';
import Landing from './pages/Landing';
import SignupForm from './pages/SignupForm'; // Add your new page

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/" element={<TemporaryLanding />} />
        </Routes>
    );
};

export default App;
