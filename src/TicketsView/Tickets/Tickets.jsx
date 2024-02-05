import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getTickets } from '../../api/api'
import { getTicketsAC } from '../../actions/apiActions'
import ShowMore from '../ShowMore/ShowMore'

import Ticket from './Ticket/Ticket'
import styles from './Tickets.module.scss'

const Tickets = ({ tickets, getTicketsAC }) => {
  const [count, setCount] = useState(5)
  useEffect(() => {
    getTickets().then((res) => {
      getTicketsAC(res.tickets)
    })
  }, [])

  const ticketsList = tickets.slice(0, count)

  const onClick = () => {
    setCount((count) => {
      return count + 5
    })
  }
  return (
    <>
      <ul className={styles.list}>
        {ticketsList.map((ticket, id) => {
          return (
            <li className={styles.item} key={id}>
              <Ticket ticket={ticket} />
            </li>
          )
        })}
      </ul>
      <ShowMore onClick={onClick} />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    searchId: state.apiReducer.searchId,
    tickets: state.apiReducer.tickets,
  }
}

export default connect(mapStateToProps, { getTicketsAC })(Tickets)
