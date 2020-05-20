import React, { useState } from 'react'
import styles from './styles.module.css'
export const SliderComponent = ({ min, max, step, value, callback }) => {
  const [currentValue, setSliderValue] = useState(value);
  const onChange = (event) => {
    setSliderValue(event.target.value)
    callback(event.target.value)
  }
  return (
    <React.Fragment>
      <div className={styles.value}
        style={{
          display: 'block',
          textAlign: 'center',
          marginTop: '5%',
          color: '#00adb5'
        }}
      >
        {currentValue}
      </div>
      <div className={styles.row}>
        <input
          type='range'
          className={styles.slider}
          min={min}
          max={max}
          value={currentValue}
          step={step}
          onChange={onChange}
        />
      </div>
    </React.Fragment>
  )
}
