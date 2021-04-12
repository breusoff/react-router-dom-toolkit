import React from "react";
import {Link} from "react-router-dom";
import routes from "../routes";

const NavBar = () => {
    return (
        <nav style={{marginBottom: "1rem"}}>
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
        </nav>
    );
};

export default NavBar;
