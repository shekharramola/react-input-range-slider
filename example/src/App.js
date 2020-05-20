import React from 'react'

import { SliderComponent } from 'react-input-range-slider'
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

export default App
