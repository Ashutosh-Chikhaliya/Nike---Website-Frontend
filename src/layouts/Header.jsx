import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link className="register p-2" to="/sign-up">
                    JOIN US
                </Link>
                <Link className="register p-2" to="/login">
                    SIGN IN
                </Link>
            </div>
        </>
    );
};

export default Header;
