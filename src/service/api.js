const Method = {
  GET: `GET`,
  PUT: `PUT`,
  POST: `POST`,
  DELETE: `DELETE`,
}

const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
}

export default class Api {
  constructor( endPoint, path ) {
    this._endPoint = endPoint
    this._path = path
  }

  getHomes = async () => {
    const response = await this._load( { url: `${this._path}` } )
    const data = await Api.toJSON( response )
    const { nextPage: pageNumber, items: homes } = data

    this._path = pageNumber

    return { homes, pageNumber }
  }

  _load = ( {
    url,
    method = Method.GET,
    body = null,
    headers = new Headers()
  } ) => {
    return fetch( `${this._endPoint}${url}`, { method, body, headers } )
      .then( Api.checkStatus )
      .catch( Api.catchError )
  }

  static checkStatus( response ) {
    if (
      response.status < SuccessHTTPStatusRange.MIN ||
      response.status > SuccessHTTPStatusRange.MAX
    ) {
      throw new Error( `${response.status}: ${response.statusText}` )
    }

    return response
  }

  static toJSON( response ) {
    return response.json()
  }

  static catchError( err ) {
    throw err
  }
}
