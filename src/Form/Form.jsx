import React from 'react'

import Input from '../UI/Input/Input'

import styles from './Form.module.scss'

const Form = () => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend>Количество пересадок</legend>
        <div className={styles.wrapper}>
          <Input label="Все" />
          <Input label="Без пересадок" />
          <Input label="1 пересадка" />
          <Input label="2 пересадки" />
          <Input label="3 пересадки" />
        </div>
      </fieldset>
    </form>
  )
}

export default Form
