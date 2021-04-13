---
title: NotFoundRoute
slug: /not-found
---

Create 404 fallback Route at the specific path and optionally redirect to it when URL doesn't match existing routes

## Usage

```tsx
import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {NotFoundRoute} from 'react-router-dom-toolkit';


const App = () => {
    return (
        <Router>
            <Switch>
                // some other routes
                ...
        
                // fallback 404
                <NotFoundRoute path="/404-not-found" redirect>
                    <NotFoundPage />
                </NotFoundRoute>
            </Switch>
        </Router>
    );
};
```

## Props
| Props | Type | Default | Description |
|-------|------|---------|-------------|
| path | string | /404 | location of 404 page |
| redirect | boolean | false | if true redirects to path |