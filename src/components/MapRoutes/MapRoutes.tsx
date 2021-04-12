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
                ([key, route]) =>
                    route.page && (
                        <Route exact path={route.url(":parameter")} key={key}>
                            {route.page}
                        </Route>
                    ),
            )}
        </>
    );
};

export default MapRoutes;
