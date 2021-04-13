---
title: useTitle
slug: /use-title
---

React side-effect hook that sets title of the page.

## Usage

```tsx
import React from "react";
import {useTitle} from 'react-router-dom-toolkit';

const App = () => {
    useTitle("Hello World")
    // => Hello World

    useTitle("Hello World", {app: {
        name: "App Name",
    }})
    // => Hello World | App Name

    useTitle("Hello World", {app: {
        name: "App Name",
        nameBeforeDelimiter: true,
    }})
    // => App Name | Hello World

    useTitle("Hello World", {app: {
        name: "App Name",
        delimiter: " # ",
    }})
    // => Hello World # App Name

    return (
        <div>
            App
        </div>
    );
};
```

## Arguments
| Props | Type | Default | Description |
|-------|------|---------|-------------|
| title | string | - | some text in title |
| options | ITitleOptions | - | other title options |

### ITitleOptions

| Props | Type | Default | Description |
|-------|------|---------|-------------|
| app | IAppNameOptions | - | props for application title |
| restoreOnUnmount | boolean | false | restore old title after component unmount|

### IAppNameOptions

| Props | Type | Default | Description |
|-------|------|---------|-------------|
| name | string | - | application name |
| delimiter | string | " \| " | symbol between application name and title |
| nameBeforeDelimiter | boolean | false | if **true** put name before title |
