import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import TemporaryLanding from './pages/TemporaryLanding.tsx';
import Landing from './pages/Landing.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}

createRoot(rootElement).render(
    <StrictMode>
        <TemporaryLanding />
    </StrictMode>
);