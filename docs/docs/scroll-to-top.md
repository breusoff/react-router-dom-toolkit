---
title: ScrollToTop
slug: /scroll-to-top
---

Most of the time all you need is to “scroll to the top” because you have a long content page, that when navigated to, stays scrolled down. This hook will scroll the window up on every navigation

## Usage

```tsx
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {ScrollToTop} from 'react-router-dom-toolkit';

const App = () => {
    return (
        <Router>
            <ScrollToTop/>
            <App/>
        </Router>
    );
};
```
