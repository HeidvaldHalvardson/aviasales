import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions/sortActions'

import styles from './Tabs.module.scss'

const Tabs = ({ sortValue, cheapestAC, fastestAC, optimalAC }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.tab} ${sortValue === 'cheapest' ? styles['tab-current'] : ''}`} onClick={cheapestAC}>
        <span>Самый дешевый</span>
      </div>
      <div className={`${styles.tab} ${sortValue === 'fastest' ? styles['tab-current'] : ''}`} onClick={fastestAC}>
        <span>Самый быстрый</span>
      </div>
      <div className={`${styles.tab} ${sortValue === 'optimal' ? styles['tab-current'] : ''}`} onClick={optimalAC}>
        <span>Оптимальный</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ sortValue: state.sortReducer })

export default connect(mapStateToProps, actions)(Tabs)
