import React, {lazy} from "react";
import {IRoute, IRoutes} from "../../.";

interface IAppRoutes extends IRoutes {
    main: IRoute;
    second: IRoute;
    withParameter: IRoute;
}

const MainPage = lazy(() => import("../src/components/MainPage"));
const SecondPage = lazy(() => import("../src/components/SecondPage"));
const ParameterPage = lazy(() => import("../src/components/ParameterPage"));

const routes: IAppRoutes = {
    main: {
        title: "Main Page",
        path: () => "/",
        page: <MainPage />,
        exact: true,
    },
    second: {
        title: "Second Page",
        path: () => "/second",
        page: <SecondPage />,
        exact: true,
    },
    withParameter: {
        title: "Parameter Page",
        path: param => `/parameter/${param}`,
        page: <ParameterPage />,
        exact: true,
    },
};

export default routes;
