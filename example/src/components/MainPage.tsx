import React from "react";
import routes from "../routes";
import NavBar from "./NavBar";
import Page from "./Page";

const MainPage = () => {
    return (
        <Page route={routes.main}>
            <NavBar />
            <h1>Main Page</h1>
        </Page>
    );
};

export default MainPage;
