import React from "react";
import routes from "../routes";
import NavBar from "./NavBar";
import Page from "./Page";

const SecondPage = () => {
    return (
        <Page route={routes.second}>
            <NavBar />
            <h1>Second Page</h1>
        </Page>
    );
};

export default SecondPage;
