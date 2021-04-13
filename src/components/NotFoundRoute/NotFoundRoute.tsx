import React, {FC} from "react";
import {Redirect, Route} from "react-router-dom";

interface INotFoundRouteProps {
    path?: string;
    redirect?: boolean;
}

const NotFoundRoute: FC<INotFoundRouteProps> = ({
    children,
    path = "/404",
    redirect,
}) => {
    if (!redirect) {
        return <Route>{children}</Route>;
    }

    return (
        <>
            <Route exact path={path}>
                {children}
            </Route>
            <Redirect from="*" to={path} />
        </>
    );
};

export default NotFoundRoute;
