import React, {FC} from "react";
import {Route} from "react-router-dom";
import IRoutes from "src/interfaces/IRoutes";

interface IMapRoutesProps {
    routes: IRoutes;
}

const MapRoutes: FC<IMapRoutesProps> = ({routes}) => {
    return (
        <>
            {Object.entries(routes).map(
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
            )}
        </>
    );
};

export default MapRoutes;
