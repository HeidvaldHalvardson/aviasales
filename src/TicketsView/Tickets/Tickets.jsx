import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getTickets } from '../../api/api'
import { getTicketsAC, toggleErrorAC } from '../../actions/apiActions'
import ShowMore from '../ShowMore/ShowMore'
import Spinner from '../../UI/Spinner/Spinner'

import Ticket from './Ticket/Ticket'
import styles from './Tickets.module.scss'

const Tickets = ({ tickets, sort, filter, error, getTicketsAC, toggleErrorAC }) => {
  const [count, setCount] = useState(5)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getTickets()
      .then((res) => {
        toggleErrorAC(false)
        getTicketsAC(res.tickets)
        setIsLoading(false)
      })
      .catch(() => {
        toggleErrorAC(true)
        setIsLoading(false)
      })
  }, [])

  const filterTicketsList = (list, filterValue) => {
    let filteredList = []
    for (let item of filterValue) {
      if (item.value === 'direct' && item.checked)
        filteredList.push(...list.filter((i) => i.segments[0].stops.length === 0))
      if (item.value === 'one-stop' && item.checked)
        filteredList.push(...list.filter((i) => i.segments[0].stops.length === 1))
      if (item.value === 'two-stop' && item.checked)
        filteredList.push(...list.filter((i) => i.segments[0].stops.length === 2))
      if (item.value === 'three-stop' && item.checked)
        filteredList.push(...list.filter((i) => i.segments[0].stops.length === 3))
    }
    return filteredList
  }

  const sortingTicketsList = (list, sortingValue) => {
    if (sortingValue === 'cheapest') return [...list].sort((a, b) => a.price - b.price)
    if (sortingValue === 'fastest') return [...list].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    if (sortingValue === 'optimal')
      return [...list].sort((a, b) => a.segments[0].stops.length - b.segments[0].stops.length)
  }

  const ticketsList = sortingTicketsList(filterTicketsList(tickets, filter), sort).slice(0, count)

  const onClick = () => {
    setCount((count) => {
      return count + 5
    })
  }

  const ticketView =
    ticketsList.length > 0 && !isLoading && !error ? (
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
    ) : null

  const noMatchView =
    ticketsList.length === 0 && !error && !isLoading ? (
      <p className={styles['no-match']}>Рейсов, подходящих под заданные фильтры, не найдено</p>
    ) : null

  const errorView = error ? <p className={styles.error}>Что-то пошло не так, пожалуйста обновите страницу</p> : null

  const spinner = isLoading && !error ? <Spinner fontSize={60} /> : null

  return (
    <>
      {ticketView}
      {noMatchView}
      {errorView}
      {spinner}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.apiReducer.tickets,
    sort: state.sortReducer,
    filter: state.filterReducer,
    error: state.apiReducer.error,
  }
}

export default connect(mapStateToProps, { getTicketsAC, toggleErrorAC })(Tickets)
