# react-input-range-slider

> It is slider component to take the value from a specific user defined range

[![NPM](https://img.shields.io/npm/v/react-input-range-slider.svg)](https://www.npmjs.com/package/react-input-range-slider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-input-range-slider
```

## Usage

```jsx
import React, { Component } from 'react'

import SliderComponent from 'react-input-range-slider'
import 'react-input-range-slider/dist/index.css'

const App = () => {
  const getCurrentValue = (value) => {
    console.log(value)
  }
  return (
    <SliderComponent
      min={0}
      max={100}
      step={1}
      value={15}
      callback={(value) => getCurrentValue(value)}
    />
  )
}

export default App;
```

## License

GNU General Public License v3.0 © [shekharramola](https://github.com/shekharramola)
