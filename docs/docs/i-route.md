---
title: IRoute
slug: /i-route
---

Base interface for application routing

## Usage

```tsx
import React from "react";
import {IRoute} from 'react-router-dom-toolkit';

const mainPage: IRoute = {
    title: "Main Page",
    path: () => "/",
    page: <MainPage />,
    exact: true,
};

const withParameter: IRoute = {
    title: "News Item",
    path: (param) => `/news/${param}`,
    page: <NewsPage />,
    exact: true,
};

```

Also you can extend **IRoute** for your needs

```tsx
import {IRoute} from 'react-router-dom-toolkit';

interface IAppRoute extends IRoute {
    permissions: Permissions[];
    icon: IFile;
}
```

## Properties

| Props | Type | Optional | Description |
|-------|------|----------|-------------|
| title | string | false | page title |
| page | ReactNode | false | A React component to render only when the location matches |
| path | (parameter?: string \| number) => string; | false | URL of page to match with optional parameter |
| exact | boolean | true | When true, will only match if the path matches the location.pathname exactly |
| sensitive | boolean | true | When true, will match if the path is case sensitive |
| strict | boolean | true | When true, a path that has a trailing slash will only match a location.pathname with a trailing slash |
