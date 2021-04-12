import React from "react";
import routes from "../routes";
import Page from "./Page";

const MainPage = () => {
    return (
        <Page route={routes.main}>
            <h1>Main Page</h1>
        </Page>
    );
};

export default MainPage;
