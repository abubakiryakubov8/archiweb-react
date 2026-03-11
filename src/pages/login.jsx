import React from 'react'
import { useNavigate } from "react-router-dom";

const LoginComp = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px',
            }}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                    style={{ padding: "5px 10px" }}
                    type="text"
                    placeholder="email"
                />

                <input
                    type="password"
                    placeholder="password"
                    style={{ padding: "5px 10px" }}
                />

                <button onClick={handleLogin}>sign in</button>
            </div>
        </div>
    );
};

export default LoginComp;