import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

const LabelEnum = {
  'IndependentLiving': {
    CLASSNAME: 'card__label--living',
    TEXT: 'Independent living'
  },
  'SupportAvailable': {
    CLASSNAME: 'card__label--business',
    TEXT: 'Restaurant & Support available'
  }
}

const getNumberFormat = ( value ) => {
  return value.toString().replace( /\B(?=(\d{3})+(?!\d))/g, `,` )
}

const Card = ( { data } ) => {
  const { id, type, title, address, price } = data
  return (
    <Link to={ `/details/${id}` } className="card">
      <div className="card__image">
        <picture>
          <source type="image/webp" srcSet="https://via.placeholder.com/754x456.webp/FF0000/000000?text=House-WEBP-2x 2x, https://via.placeholder.com/377x228.webp/FF0000/000000?text=House-WEBP-1x 1x" />
          <img
            loading="lazy"
            className="review__icon"
            src="https://via.placeholder.com/377x228.jpg/FF0000/000000?text=House-JPG-1x"
            srcSet="https://via.placeholder.com/754x456.jpg/FF0000/000000?text=House-JPG-2x 2x"
            width="377"
            height="228"
            alt="House for sale"
          />
        </picture>
        <p className={ `card__label ${LabelEnum[ type ].CLASSNAME}` }>{ LabelEnum[ type ].TEXT }</p>
      </div>

      <div className="card__description">
        <h3 className="card__title">{ title }</h3>
        <p className="card__address">{ address }</p>
        <p className="card__price">New Properties for Sale from <span>£{ getNumberFormat( price ) }</span></p>
        <p className="card__options">Shared Ownership Available</p>
      </div>
    </Link>
  )
}

export default Card
