# react-hook-figlet

> React custom hook for figlet.js

[![NPM](https://img.shields.io/npm/v/react-hook-figlet.svg)](https://www.npmjs.com/package/react-hook-figlet) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hook-figlet
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'react-hook-figlet'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [gongo](https://github.com/gongo)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
