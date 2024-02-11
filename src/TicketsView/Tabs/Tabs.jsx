import React from 'react'
import { connect } from 'react-redux'

import { sortingAC } from '../../actions/sortActions'

import styles from './Tabs.module.scss'

const Tabs = ({ sortValue, sortingAC }) => {
  const sortingValues = [
    { value: 'cheapest', text: 'Самый дешевый' },
    { value: 'fastest', text: 'Самый быстрый' },
    { value: 'optimal', text: 'Оптимальный' },
  ]

  return (
    <div className={styles.wrapper}>
      {sortingValues.map((item, id) => {
        return (
          <div
            key={id}
            className={`${styles.tab} ${sortValue === item.value ? styles['tab-current'] : ''}`}
            onClick={() => sortingAC(item.value)}
          >
            <span>{item.text}</span>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({ sortValue: state.sortReducer })

export default connect(mapStateToProps, { sortingAC })(Tabs)
