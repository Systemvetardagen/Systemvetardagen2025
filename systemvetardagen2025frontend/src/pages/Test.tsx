import { useState } from 'react';
import '../App.css';
import Landing from './Landing';

function Test() {
    const [count, setCount] = useState(0);
    if (count > 10) {
        return <Landing />;
    }
    return (
        <>
            <div className="bg-background  h-screen text-center">
                <h1 className="text-9xl text-text font-bold ">DISK 2</h1>
                <button
                    className="bg-primary rounded-md text-text border-secondary focus:border-accent border-2 shadow-md m-5 p-5 transition active:scale-90"
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    Klicka knapp (IGEN?)
                </button>
                <h2 className="text-text">{count}</h2>
            </div>
        </>
    );
}

export default Test;
