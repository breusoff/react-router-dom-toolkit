import {useEffect, useRef} from "react";

interface IAppNameOptions {
    name: string;
    delimiter?: string;
    nameBeforeDelimiter?: boolean;
}

export interface ITitleOptions {
    app?: IAppNameOptions;
    restoreOnUnmount?: boolean;
}

const useTitle = (title = "", options: ITitleOptions) => {
    const prevTitleRef = useRef(document.title);

    function setTitle(title?: string) {
        if (title) {
            document.title = title;
        }
    }

    function getTitle() {
        if (!options.app) {
            return title;
        }

        const {name, delimiter = " | ", nameBeforeDelimiter} = options.app;

        if (!title) {
            return name;
        }

        if (nameBeforeDelimiter) {
            return `${name}${delimiter}${title}`;
        }

        return `${title}${delimiter}${name}`;
    }

    useEffect(() => {
        setTitle(getTitle());

        if (options.restoreOnUnmount) {
            return () => {
                setTitle(prevTitleRef.current);
            };
        }

        return;
    }, [title, options]);
};

export default useTitle;
