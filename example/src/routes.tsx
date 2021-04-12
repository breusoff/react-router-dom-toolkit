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
        url: () => "/",
        page: <MainPage />,
    },
    second: {
        title: "Second Page",
        url: () => "/second",
        page: <SecondPage />,
    },
    withParameter: {
        title: "Parameter Page",
        url: param => `/parameter/${param}`,
        page: <ParameterPage />,
    },
};

export default routes;
