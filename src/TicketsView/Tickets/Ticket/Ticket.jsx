import React from 'react'

import styles from './Ticket.module.scss'

const Ticket = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.coast}>13 400 Р</span>
        <img
          className={styles.logo}
          src="https://static.tildacdn.com/tild3233-3764-4364-a435-316565336162/3b11e31dd759daf585d3.png"
          alt="Логотип авиакомпании."
        />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>MOW – HKT</th>
            <th>В пути</th>
            <th>2 пересадки</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10:45 – 08:00</td>
            <td>21ч 15м</td>
            <td>HKG, JNB</td>
          </tr>
        </tbody>
      </table>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>MOW – HKT</th>
            <th>В пути</th>
            <th>1 пересадка</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11:20 – 00:50</td>
            <td>13ч 30м</td>
            <td>HKG</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Ticket
