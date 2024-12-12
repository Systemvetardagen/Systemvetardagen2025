import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Landing from './pages/Landing.js';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}

createRoot(rootElement).render(
    <StrictMode>
        <Landing />
    </StrictMode>
);
