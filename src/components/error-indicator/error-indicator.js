import React from 'react'
import './error-indicator.scss'

import { ReactComponent as Icon } from './broken-house.svg';

const ErrorIndicator = () => {
  return (
    <div className="error wrapper">
      <h2 className="error__decription">Something terrible happened...<br />Please try to reload the page.</h2>
      <Icon className="error__icon" />
    </div>
  )
}

export default ErrorIndicator
