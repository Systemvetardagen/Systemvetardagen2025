import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TemporaryLanding from './pages/TemporaryLanding';
import Landing from './pages/Landing';
import { QueryClient, QueryClientProvider } from 'react-query';
import SignupForm from './pages/SignupForm';
import StudentDashboard from './pages/StudentDashboard';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/" element={<TemporaryLanding />} />
                <Route
                    path="/studentdashboard"
                    element={<StudentDashboard />}
                />
                {/* Redirecting undefined routes */}
                <Route path="*" element={<Navigate to="/" replace />} /> 
            </Routes>
        </QueryClientProvider>
    );
};

export default App;
