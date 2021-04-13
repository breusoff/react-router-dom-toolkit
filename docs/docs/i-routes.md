---
title: IRoutes
slug: /i-routes
---

Base interface for application routing.
You should declare all your routes in one place.
Used for Router generation.

Watch **IRoute** [documentation](/docs/i-route)

## Usage

```tsx
import React from "react";
import {IRoutes, IRoute} from 'react-router-dom-toolkit';

interface IAppRoutes extends IRoutes {
    main: IRoute;
    second: IRoute;
    withParameter: IRoute;
}

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
        path: (param) => `/parameter/${param}`,
        page: <ParameterPage />,
        exact: true,
    },
};


```