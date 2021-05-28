import React from 'react'
import ReactDOM from 'react-dom'

import './sass/fonts.scss'
import './sass/base.scss'
import './sass/wrapper.scss'

import App from './components/app'
import Api from './service/api'

const END_POINT = `https://interview-test-task-api.herokuapp.com/pages?page=`
const PATH = 1

const api = new Api( END_POINT, PATH )

ReactDOM.render(
  <App api={ api } />,
  document.getElementById( 'root' )
)
