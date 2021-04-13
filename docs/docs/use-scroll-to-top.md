---
title: useScrollToTop
slug: /use-scroll-to-top
---

Most of the time all you need is to “scroll to the top” because you have a long content page, that when navigated to, stays scrolled down. This hook will scroll the window up on every navigation

## Usage

```tsx
import React, {FC} from "react";
import {useScrollToTop} from 'react-router-dom-toolkit';

const Layout: FC = ({children}) => {
    useScrollToTop()

    return (
        <div>
            <nav>nav bar</nav>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Layout/>
        </Router>
    );
};
```
