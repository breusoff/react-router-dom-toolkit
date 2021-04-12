import React from "react";
import {Link} from "react-router-dom";
import routes from "../routes";

const NavBar = () => {
    return (
        <nav style={{marginBottom: "1rem"}}>
            <h2>Nav Bar</h2>

            <div>
                <Link to={routes.main.path()}>{routes.main.title}</Link>
            </div>
            <div>
                <Link to={routes.second.path()}>{routes.second.title}</Link>
            </div>
            <div>
                <Link to={routes.withParameter.path(1)}>
                    {routes.withParameter.title} 1
                </Link>
            </div>
            <div>
                <Link to={routes.withParameter.path(2)}>
                    {routes.withParameter.title} 2
                </Link>
            </div>

            <div>
                <Link to="/404">404 page</Link>
            </div>

            <div>
                <Link to="/404-not-found">404 page with redirect</Link>
            </div>
        </nav>
    );
};

export default NavBar;
