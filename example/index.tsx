import "react-app-polyfill/ie11";
import React, {Suspense} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import ReactDOM from "react-dom";
import {SuspenseLoading, MapRoutes} from "../.";
import routes from "./src/routes";

const App = () => {
    return (
        <Router>
            <Suspense fallback={<SuspenseLoading />}>
                <Switch>
                    <MapRoutes routes={routes} />
                </Switch>
            </Suspense>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
