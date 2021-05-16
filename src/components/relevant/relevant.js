import React, { useState, useEffect } from 'react'

import Filter from '../filter'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import Card from '../card'

import './relevant.scss'

const Relevant = ( { api } ) => {
  const [ error, setError ] = useState( null )
  const [ isLoaded, setIsLoaded ] = useState( false )
  const [ homes, setHomes ] = useState( [] )
  const [ filter, setFilter ] = useState( '' )

  const filterHandler = ( value ) => {
    if ( value.length <= 3 ) {
      return setFilter( '' )
    }

    setFilter( value )
  }

  useEffect( () => {
    api.getHomes()
      .then( homes => {
        setIsLoaded( true )
        setHomes( homes )
      } )
      .catch( error => {
        setIsLoaded( true )
        setError( error )
      } )
  }, [ api ] )

  if ( error ) {
    return <ErrorIndicator />
  } else if ( !isLoaded ) {
    return <Spinner />
  } else {
    return (
      <section className="relevant">
        <div className="relevant__wrapper wrapper">
          <h2 className="relevant__title">Our Latest Developments</h2>
          <Filter className="relevant__filter" onInput={ filterHandler } />
          <ul className="relevant__list">
            { homes
              .filter( ( { title } ) => {
                if ( filter.length <= 3 ) return true
                return title.toLowerCase().includes( filter.toLowerCase() )
              } )
              .map( home => {
                return (
                  <li key={ home.id } className="relevant__item">
                    <Card data={ home } />
                  </li>
                )
              } ) }
          </ul>
          <a href="/" className="relevant__button">See more</a>
        </div>
      </section>
    )
  }
}

export default Relevant
