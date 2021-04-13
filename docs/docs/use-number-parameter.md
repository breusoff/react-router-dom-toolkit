---
title: useNumberParameter
slug: /use-number-parameter
---

Return ":parameter" from current URL and convert it to number

## Usage

```tsx
import React from "react";
import {useNumberParameter} from 'react-router-dom-toolkit';

// URL: example.ru/news/2

const PageWithParameter = () => {
    const parameter = useNumberParameter()    
    // =>  2   

    return (
        <div>
            <h1>PageWithParameter {parameter}</h1>
        </div>
    );
};
```
