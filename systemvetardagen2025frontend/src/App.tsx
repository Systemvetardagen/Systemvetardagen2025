import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TemporaryLanding from './pages/TemporaryLanding';
import Landing from './pages/Landing';
import { QueryClient, QueryClientProvider } from 'react-query';
import SignupForm from './pages/SignupForm';
import StudentDashboard from './pages/StudentDashboard';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Companies from './pages/Companies';
import VisitInfo from './pages/VisitInfo';
import VisitInfoTest from './pages/VisitInfoTest';
import About from './pages/About';
import CompanyPage from './pages/CompanyPage';

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

                <Route path="/companies" element={<Companies />} />
                <Route path="/companies/:companyId" element={<CompanyPage />} />
                <Route path="/visit-info" element={<VisitInfo />} />
                <Route path="/visit-info-test" element={<VisitInfoTest />} />
                <Route path="/about" element={<About />} />
                {/* Redirecting undefined routes */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            {/* <Footer/> */}
        </QueryClientProvider>
    );
};

export default App;
