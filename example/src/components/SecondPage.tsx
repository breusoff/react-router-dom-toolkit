import React from "react";
import routes from "../routes";
import {Page} from "../../..";
import NavBar from "./NavBar";

const SecondPage = () => {
    return (
        <Page route={routes.second}>
            <NavBar />
            <h1>Second Page</h1>
        </Page>
    );
};

export default SecondPage;
