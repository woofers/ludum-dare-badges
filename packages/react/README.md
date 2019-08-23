# @ludum-dare-badges/react

[![img](https://github.com/woofers/ludum-dare-badges/workflows/build/badge.svg)](https://github.com/woofers/ludum-dare-badges/actions) [![img](https://david-dm.org/woofers/@ludum-dare-badges/react.svg)](https://www.npmjs.com/package/@ludum-dare-badges/react) [![img](https://img.shields.io/npm/v/@ludum-dare-badges/react.svg?color=success&label=npm%20package)](https://www.npmjs.com/package/@ludum-dare-badges/react) [![img](https://img.shields.io/npm/dt/@ludum-dare-badges/react.svg)](https://www.npmjs.com/package/@ludum-dare-badges/react) [![img](https://img.shields.io/npm/l/@ludum-dare-badges/react.svg)](https://github.com/woofers/ludum-dare-badges/blob/master/License.txt)

Display Ludum Dare Game Jam results in React.

**[Live Demo](https://badges.vandoorn.ca)**

**Note:** This project is community made and not endorsed by the offical Ludum Dare creator(s).


# Installation

**Yarn**

    yarn add @ludum-dare-badges/react

**npm**

    npm install @ludum-dare-badges/react


# Usage

```jsx
import React from 'react'
import Widget from '@ludum-dare-badges/react'

const App = () => (
  <Widget game="44/alien-e-x-p-a-n-s-i-o-n" />
)
```

Simply add the game widget to the React application using JSX.

The React component will simply call [@ludum-dare-badges/api](https://github.com/woofers/ludum-dare-badges/tree/master/packages/api)
to obtain the results badge.


## Props


### Game

The namespace of the game on the ldjam site **Required**

`game` requires both the Ludum Dare number and the game title (eg. `44/alien-e-x-p-a-n-s-i-o-n`  for Ludum Dare 44)
