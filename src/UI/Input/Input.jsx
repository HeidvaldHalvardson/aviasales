import React, { useState } from 'react'

import { ReactComponent as On } from '../../assets/checkbox-on.svg'
import { ReactComponent as Off } from '../../assets/checkbox-off.svg'

import styles from './Input.module.scss'

const Input = ({ label, checked = false }) => {
  const [isChecked, setIsChecked] = useState(checked)
  const onClick = () => {
    setIsChecked((isChecked) => {
      return !isChecked
    })
  }

  const checkboxView = isChecked ? <On /> : <Off />
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <input className="visually-hidden" type="checkbox" />
      <div className={styles.marker}>{checkboxView}</div>
      <label className={styles.label}>{label}</label>
    </div>
  )
}

export default Input
