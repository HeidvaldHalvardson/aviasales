import React from 'react'
import { connect } from 'react-redux'

import Checkbox from '../UI/Checkbox/Checkbox'
import * as actions from '../actions/filterActions'

import styles from './Form.module.scss'

const Form = ({ checkboxList, onChangedFilterAC }) => {
  const toggleFilterAll = (checked) => {
    const newFilter = checkboxList.map((item) => {
      item.checked = checked
      return item
    })
    onChangedFilterAC(newFilter)
  }

  const toggleFilter = (checked, value) => {
    const newAll = { ...checkboxList[0] }
    const allPoints = checkboxList.slice(1)
    if (newAll.checked && !checked) {
      newAll.checked = false
    } else if (allPoints.filter((item) => item.checked).length === 3 && !newAll.checked && checked) {
      newAll.checked = true
    }

    const newFilter = allPoints.map((item) => {
      if (item.value === value) {
        item.checked = checked
        return item
      }
      return item
    })

    onChangedFilterAC([newAll, ...newFilter])
  }

  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend>Количество пересадок</legend>
        <div className={styles.wrapper}>
          {checkboxList.map(({ label, value, checked }, id) => {
            return (
              <Checkbox
                key={id}
                value={value}
                label={label}
                checked={checked}
                toggleFilter={value === 'all' ? toggleFilterAll : toggleFilter}
              />
            )
          })}
        </div>
      </fieldset>
    </form>
  )
}

const mapStateToProps = (state) => ({ checkboxList: state.filterReducer })

export default connect(mapStateToProps, actions)(Form)
