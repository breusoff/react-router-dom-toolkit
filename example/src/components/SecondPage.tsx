import React from "react";
import routes from "../routes";
import Page from "./Page";

const SecondPage = () => {
    return (
        <Page route={routes.second}>
            <h1>Second Page</h1>
        </Page>
    );
};

export default SecondPage;
