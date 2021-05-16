import React from 'react'

import './filter.scss'

const Filter = ( { className: receivedСlassNames, onInput } ) => {
  return (
    <div className={ `${receivedСlassNames} filter` }>
      <label htmlFor="filter-by-title">Filter</label>
      <input onInput={ ( evt ) => onInput( evt.target.value ) } type="text" name="filter-by-title" id="filter-by-title" />
    </div>
  )
}

export default Filter
