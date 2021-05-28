import React, { useContext } from 'react'

import Context from '../context';

import './button.scss'

const Button = () => {
  const { getHomes } = useContext( Context )

  return <a
    href="/"
    className="button"
    onClick={ ( evt ) => {
      evt.preventDefault()
      getHomes()
    } }>See more</a>
}

export default Button
