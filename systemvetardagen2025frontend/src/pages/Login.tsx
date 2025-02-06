import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { user } from '../structure/genstruct';

interface loginProps {
    login: (userData: user) => void;
    loginSuccess: 'initial' | 'fail' | 'success';
}

const Login = (props: loginProps) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginButtonPressed, setLoginButtonPressed] =
        useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const usernameTemp = localStorage.getItem('username');
        const passwordTemp = localStorage.getItem('password');

        if (usernameTemp && passwordTemp) {
            props.login({
                username: usernameTemp,
                password: passwordTemp,
            });
        }
    }, []);

    const handleLogin = () => {
        setLoginButtonPressed(true);
        if (username && password) {
            props.login({ username, password });
        }
    };
    return (
        <div className="h-screen w-screen flex flex-col items-center pt-[10vh] min-w-[350px] gradient-background">
            <div className="w-full max-w-4xl text-center mb-12 mt-16">
                <div className="mb-4">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                        Systemvetardagen 2025
                    </h1>
                    <h2 className="text-white text-2xl">Marketing Login</h2>
                </div>
            </div>
            <div className="bg-white rounded-lg p-8 w-[80%] max-w-2xl shadow-xl">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full px-4 py-2 rounded-md bg-gray-100"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 rounded-md bg-gray-100"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleLogin}
                        className="w-full bg-purple-600 text-white py-2 rounded-md enabled:hover:bg-purple-700 transition-colors disabled:opacity-30"
                    >
                        Login
                    </button>
                    {props.loginSuccess === 'fail' && loginButtonPressed && (
                        <p className="text-red-500">Login failed</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
