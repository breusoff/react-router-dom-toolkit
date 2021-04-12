import React from "react";
import routes from "../routes";
import {Page} from "../../..";
import NavBar from "./NavBar";

const MainPage = () => {
    return (
        <Page route={routes.main}>
            <NavBar />
            <h1>Main Page</h1>
        </Page>
    );
};

export default MainPage;
