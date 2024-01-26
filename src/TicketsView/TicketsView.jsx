import React from 'react'

import Tabs from './Tabs/Tabs'
import Tickets from './Tickets/Tickets'
import ShowMore from './ShowMore/ShowMore'
import styles from './TicketsView.module.scss'

const TicketsView = () => {
  return (
    <section className={styles.wrapper}>
      <Tabs />
      <Tickets />
      <ShowMore />
    </section>
  )
}

export default TicketsView
