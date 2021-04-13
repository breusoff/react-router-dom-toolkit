import React, {CSSProperties} from "react";
import {Link} from "react-router-dom";
import routes from "../routes";

const styles: CSSProperties = {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
};

const NavBar = () => {
    return (
        <nav style={styles}>
            <h2>Nav Bar</h2>
            <Link to={routes.main.path()}>{routes.main.title}</Link>
            <Link to={routes.second.path()}>{routes.second.title}</Link>
            <Link to={routes.withParameter.path(1)}>
                {routes.withParameter.title} 1
            </Link>
            <Link to={routes.withParameter.path(2)}>
                {routes.withParameter.title} 2
            </Link>
            <Link to="/404">404 page</Link>
            <Link to="/404-not-found">404 page with redirect</Link>
        </nav>
    );
};

export default NavBar;
