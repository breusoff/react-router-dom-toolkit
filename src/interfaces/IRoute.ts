import {ReactNode} from "react";

export default interface IRoute {
    /**
     * URL of page to match with optional parameter
     */
    path: (parameter?: string | number) => string;
    /**
     * Page title
     */
    title: string;
    /**
     * A React component to render only when the location matches
     */
    page: ReactNode;
    /**
     * When true, will only match if the path matches the location.pathname exactly.
     */
    exact?: boolean;
    /**
     * When true, will match if the path is case sensitive.
     */
    sensitive?: boolean;
    /**
     * When true, a path that has a trailing slash will only match a location.pathname with a trailing slash.
     */
    strict?: boolean;
}
