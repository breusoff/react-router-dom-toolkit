import "react-app-polyfill/ie11";
import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import ReactDOM from "react-dom";
import {SuspenseLoading, NotFoundRoute, mapRoutes} from "../.";
import routes from "./src/routes";

const NotFoundPage = lazy(() => import("./src/components/NotFoundPage"));

const App = () => {
    return (
        <Router>
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

ReactDOM.render(<App />, document.getElementById("root"));
