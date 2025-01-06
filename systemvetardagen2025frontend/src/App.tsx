import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemporaryLanding from './pages/TemporaryLanding';
import Landing from './pages/Landing';
import SignupForm from './pages/SignupForm';
import StudentDashboard from './pages/StudentDashboard';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/" element={<TemporaryLanding />} />
            <Route path="/studentdashboard" element={<StudentDashboard />} />
        </Routes>
    );
};

export default App;
