import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemporaryLanding from './pages/TemporaryLanding';
import Landing from './pages/Landing';
import { QueryClient, QueryClientProvider } from 'react-query';
import SignupForm from './pages/SignupForm';
import StudentDashboard from './pages/StudentDashboard';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';

const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/" element={<TemporaryLanding />} />
                <Route path="/login" element={<Login />} />

                <Route
                    path="/studentdashboard"
                    element={<StudentDashboard />}
                />
            </Routes>
        </QueryClientProvider>
    );
};

export default App;
