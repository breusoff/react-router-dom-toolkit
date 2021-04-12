import React from "react";
import {Route} from "react-router-dom";
import IRoutes from "src/interfaces/IRoutes";

function mapRoutes(routes: IRoutes) {
    return Object.entries(routes).map(
        ([key, {sensitive, exact, page, path, strict}]) =>
            page && (
                <Route
                    exact={exact}
                    sensitive={sensitive}
                    strict={strict}
                    path={path(":parameter")}
                    key={key}
                >
                    {page}
                </Route>
            ),
    );
}

export default mapRoutes;
