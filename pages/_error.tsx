import React, { FunctionComponent } from 'react'

type ErrorProps = {
  statusCode: number,
};

const Error: FunctionComponent<ErrorProps> = ({ statusCode }) =>{
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;