import React from "react";
import {Link} from "react-router-dom";
import routes from "../routes";

const NavBar = () => {
    return (
        <nav style={{marginBottom: "1rem"}}>
            <div>
                <Link to={routes.main.url()}>{routes.main.title}</Link>
            </div>
            <div>
                <Link to={routes.second.url()}>{routes.second.title}</Link>
            </div>
            <div>
                <Link to={routes.withParameter.url(1)}>
                    {routes.withParameter.title} 1
                </Link>
            </div>
            <div>
                <Link to={routes.withParameter.url(2)}>
                    {routes.withParameter.title} 2
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
