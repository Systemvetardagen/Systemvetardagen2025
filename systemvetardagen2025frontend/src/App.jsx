import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="bg-background  h-screen text-center">
                <h1 className="text-9xl text-text font-bold ">DISK</h1>
                <span className="text-text">DISK</span>
                <button className="bg-primary rounded-md text-text border-accent border-2 shadow-md m-5 p-5 animate-bounce">
                    Klicka knapp
                </button>
            </div>
        </>
    );
}

export default App;
