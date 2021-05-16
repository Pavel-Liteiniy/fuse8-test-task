import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Api from '../../service/api'
import Relevant from '../relevant'

const END_POINT = `https://603e38c548171b0017b2ecf7.mockapi.io`
const PATH = `homes`

const App = () => {
  const api = new Api( END_POINT, PATH )

  return (
    <>
      <h1 className="visually-hidden">Search for real estate purchase</h1>
      <Router>
        <Route path="/" render={ () => <Relevant api={ api } /> } exact />
        <Route path="/details/:id" render={ ( { match } ) => {
          return (
            <div className="wrapper"><h2>{ `There should be detailed information about the house - id ${match.params.id}` }</h2></div>
          )
        } } />
      </Router>
    </>
  )
}

export default App
