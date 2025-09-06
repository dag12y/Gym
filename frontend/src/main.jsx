import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WorkoutsContextProvider } from "./context/WorkoutsContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <WorkoutsContextProvider>
            <App />
        </WorkoutsContextProvider>
    </StrictMode>
);
