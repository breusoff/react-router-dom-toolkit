---
title: SuspenseLoading
slug: /suspense-loading
---

A nanoscopic progress bar. Featuring realistic trickle animations to convince your users that something is happening!

More info about Nprogress [here](https://github.com/rstacruz/nprogress)

## Usage

```tsx
import React from "react";
import {BrowserRouter as Router, Suspense, Switch} from "react-router-dom";
import {SuspenseLoading} from 'react-router-dom-toolkit';

const App = () => {
    return (
        <Router>
            <Suspense fallback={<SuspenseLoading />}>
                <Switch>
                    // some other routes
                </Switch>
            </Suspense>
        </Router>
    );
};
```

or

```tsx
import React from "react";
import {SuspenseLoading} from 'react-router-dom-toolkit';

const App = () => {
    const {data, isLoading} = useUser();
    
    return (
        <>
            {isLoading && <SuspenseLoading />}
            <div>{data}</div>
        </>
    );
};
```

