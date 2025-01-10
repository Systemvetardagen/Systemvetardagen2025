import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemporaryLanding from './pages/TemporaryLanding';
import Landing from './pages/Landing';
import { QueryClient, QueryClientProvider } from 'react-query';
import SignupForm from './pages/SignupForm';
import StudentDashboard from './pages/StudentDashboard';
import About from "./pages/About";

const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/" element={<TemporaryLanding />} />
                <Route
                    path="/studentdashboard"
                    element={<StudentDashboard />}
                />
                <Route
                    path="/about"
                    element={<About/>}
                />
            </Routes>
        </QueryClientProvider>
    );
};

export default App;
