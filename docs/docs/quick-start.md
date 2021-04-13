---
title: Quick Start
slug: /quick-start
---

Welcome to the React Router Dom Toolkit Quick Start tutorial! This tutorial will briefly introduce you to react-router-dom-toolkit and teach you how to start using it correctly.

## Step by Step

#### Step 1

Let's create some routes of our site

```tsx title="src/routes.tsx"
import React, {lazy} from "react";
import {IRoute, IRoutes} from "react-router-dom-toolkit";

// declare interface of our pages
interface IAppRoutes extends IRoutes {
    main: IRoute;
    second: IRoute;
    withParameter: IRoute;
}

// lazy import pages (we create them later)
const MainPage = lazy(() => import("src/pages/MainPage"));
const SecondPage = lazy(() => import("src/pages/SecondPage"));
const ParameterPage = lazy(() => import("src/pages/ParameterPage"));

// declare routes
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

export default routes;
```

#### Step 2
Generate our router with **SuspenseLoading** and **NotFoundRoute**

```tsx title="src/components/AppRouter.tsx"
import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {SuspenseLoading, NotFoundRoute, mapRoutes} from "react-router-dom-toolkit"
import routes from "src/routes";

const AppRouter = () => {
    return (
        <Router>
            <NavBar /> // create later
            <Suspense fallback={<SuspenseLoading />}>
                <Switch>
                    {mapRoutes(routes)}
                    <NotFoundRoute redirect>
                        <NotFoundPage />
                    </NotFoundRoute>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default AppRouter;
```

#### Step 3 (optionally)

Create some pages components

```tsx title="src/Pages.tsx"
import React, {FC} from "react";
import {useTitle, IRoute, useParameter} from "react-router-dom-toolkit";
import routes from "src/routes";

interface IPageProps {
    route: IRoute;
}

const Page: FC<IPageProps> = ({children, route}) => {
    // set title with route name and application name
    // => Route Name / Super App
    useTitle(route.title, {
        app: {
            name: "Super App",
            delimiter: " / "
        },
    });

    return <div>{children}</div>;
};


const MainPage = () => {
    return (
        <Page route={routes.main}>
            <h1>Main Page</h1>
        </Page>
    );
};

const SecondPage = () => {
    return (
        <Page route={routes.second}>
            <h1>Second Page</h1>
        </Page>
    );
};

const ParameterPage = () => {
    // get page parameter from URL
    const parameter = useParameter();

    return (
        <Page route={routes.withParameter}>
            <h1>Parameter Page {parameter}</h1>
        </Page>
    );
};

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 page</h1>
        </div>
    );
};

```

#### Step 4 (optionally)
Create simple NavBar to switch between pages

```tsx title="src/components/NavBar.tsx"
import React, {CSSProperties} from "react";
import {Link} from "react-router-dom";
import routes from "src/routes";

const styles: CSSProperties = {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
};

const NavBar = () => {
    return (
        <nav style={styles}>
            <h2>Nav Bar</h2>
            <Link to={routes.main.path()}>{routes.main.title}</Link>
            <Link to={routes.second.path()}>{routes.second.title}</Link>
            <Link to={routes.withParameter.path(1)}>
                {routes.withParameter.title} 1
            </Link>
            <Link to={routes.withParameter.path(2)}>
                {routes.withParameter.title} 2
            </Link>
            <Link to="/404">404 page</Link>
            <Link to="/404-not-found">404 page with redirect</Link>
        </nav>
    );
};
```

#### Step 5
Congratulations!

## Example Folder

You can watch example code [here](https://github.com/vbdzzz/react-router-dom-toolkit/tree/master/example)

