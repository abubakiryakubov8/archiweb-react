import React from "react";
import { useNavigate } from "react-router-dom";

export const Backbtn = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)}>
            Back
        </button>
    );
};

export function Logout() {
    const navigate = useNavigate();

    function handleLogout() {
        navigate("/login");
    }

    return (
        <button onClick={handleLogout}>
            Log Out
        </button>
    );
}
