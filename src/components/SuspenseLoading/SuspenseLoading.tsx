import React, {useEffect} from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({showSpinner: false});

const SuspenseLoading = () => {
    function init() {
        NProgress.start();

        return () => {
            NProgress.done();
        };
    }

    useEffect(init, []);

    return <></>;
};

export default SuspenseLoading;
