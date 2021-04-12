import React from "react";
import NavBar from "./NavBar";
import {useParameter} from "../../..";

const ParameterPage = () => {
    const parameter = useParameter();

    return (
        <div>
            <NavBar />
            <h1>Parameter Page {parameter}</h1>
        </div>
    );
};

export default ParameterPage;
