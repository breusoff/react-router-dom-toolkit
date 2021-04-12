import React, {FC} from "react";
import {useTitle, IRoute} from "../../..";

interface IPageProps {
    route: IRoute;
}

const Page: FC<IPageProps> = ({children, route}) => {
    useTitle(route.title, {
        app: {name: "react-router-dom-toolkit"},
    });

    return <div>{children}</div>;
};

export default Page;
