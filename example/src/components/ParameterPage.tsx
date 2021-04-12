import React from "react";
import routes from "../routes";
import {useParameter, Page} from "../../..";
import NavBar from "./NavBar";

const ParameterPage = () => {
    const parameter = useParameter();

    return (
        <Page route={routes.withParameter}>
            <NavBar />
            <h1>Parameter Page {parameter}</h1>
        </Page>
    );
};

export default ParameterPage;
