import React from 'react'

import Ticket from './Ticket/Ticket'
import styles from './Tickets.module.scss'

const Tickets = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Ticket />
      </li>
      <li className={styles.item}>
        <Ticket />
      </li>
      <li className={styles.item}>
        <Ticket />
      </li>
      <li className={styles.item}>
        <Ticket />
      </li>
      <li className={styles.item}>
        <Ticket />
      </li>
    </ul>
  )
}

export default Tickets
