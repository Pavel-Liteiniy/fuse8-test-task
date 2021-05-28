import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Relevant from '../relevant'

import Context from '../context';

const App = ( { api } ) => {
  const [ error, setError ] = useState( null )
  const [ isLoaded, setIsLoaded ] = useState( false )
  const [ homes, setHomes ] = useState( [] )
  const [ pageNumber, setPageNumber ] = useState( null )


  const getHomes = () => {
    api.getHomes()
      .then( ( { homes, pageNumber } ) => {
        setIsLoaded( true )
        setHomes( ( prevHomes ) => [ ...prevHomes, ...homes ] )
        setPageNumber( pageNumber )
      } )
      .catch( error => {
        setIsLoaded( true )
        setError( error )
      } )
  }

  useEffect( getHomes, [ api ] )

  return (
    <>
      <h1 className="visually-hidden">Search for real estate purchase</h1>
      <Context.Provider value={ { homes, pageNumber, isLoaded, error, getHomes } }>
        <Router>
          <Route path="/" render={ () => <Relevant /> } exact />
          <Route path="/details/:id" render={ ( { match } ) => {
            return (
              <div className="wrapper"><h2>{ `There should be detailed information about the house - id ${match.params.id}` }</h2></div>
            )
          } } />
        </Router>
      </Context.Provider>
    </>
  )
}

export default App
