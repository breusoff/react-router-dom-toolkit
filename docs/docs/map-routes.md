---
title: Map Routes
slug: /map-routes
---

Fills the router with pages 

Watch **IRoutes** [documentation](/docs/i-routes)

## Usage

```tsx
import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {IRoutes, IRoute, mapRoutes} from 'react-router-dom-toolkit';

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

const App = () => {
    return (
        <Router>
            <Switch>
                {mapRoutes(routes)}
            </Switch>
        </Router>
    );
};
```

## Arguments
| Props | Type | Default | Description |
|-------|------|---------|-------------|
| routes | IRoutes | - | application routes |
