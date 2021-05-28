import React, { useState, useContext } from 'react'

import Context from '../context'

import Filter from '../filter'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import Card from '../card'
import Button from '../button'

import './relevant.scss'

const Relevant = () => {
  const { homes, error, isLoaded, pageNumber } = useContext( Context )
  const [ filter, setFilter ] = useState( '' )

  const filterHandler = ( value ) => {
    if ( value.length <= 3 ) {
      return setFilter( '' )
    }

    setFilter( value )
  }

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
          { ( pageNumber !== null ) && <Button /> }
        </div>
      </section>
    )
  }
}

export default Relevant
