---
title: useParameter
slug: /use-parameter
---

Return ":parameter" from current URL

## Usage

```tsx
import React from "react";
import {useParameter} from 'react-router-dom-toolkit';

// URL: example.ru/news/some-slug

const PageWithParameter = () => {
    const parameter = useParameter()
    // =>  "some-slug"   

    return (
        <div>
            <h1>PageWithParameter {parameter}</h1>
        </div>
    );
};
```
