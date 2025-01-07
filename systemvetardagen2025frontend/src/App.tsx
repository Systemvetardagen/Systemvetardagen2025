import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemporaryLanding from './pages/TemporaryLanding';
import Landing from './pages/Landing';
import SignupForm from './pages/SignupForm'; // Add your new page
import { QueryClient, QueryClientProvider } from 'react-query';

const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/" element={<TemporaryLanding />} />
            </Routes>
        </QueryClientProvider>
    );
};

export default App;
