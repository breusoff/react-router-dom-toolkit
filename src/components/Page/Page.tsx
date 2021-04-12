import React, {FC, useEffect} from "react";
import IRoute from "src/interfaces/IRoute";

interface IPageProps {
    route?: IRoute;
}

const Page: FC<IPageProps> = ({children, route}) => {
    // update title
    useEffect(() => {
        if (route) {
            document.title = route.title;
        }
    }, [route]);

    return <>{children}</>;
};

export default Page;
