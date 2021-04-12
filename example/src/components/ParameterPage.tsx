import React from "react";
import routes from "../routes";
import {useParameter} from "../../..";
import Page from "./Page";

const ParameterPage = () => {
    const parameter = useParameter();

    return (
        <Page route={routes.withParameter}>
            <h1>Parameter Page {parameter}</h1>
        </Page>
    );
};

export default ParameterPage;
