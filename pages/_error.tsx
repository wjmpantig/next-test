import React from 'react'
import { Error } from 'next';

export default class extends Error {
  render() {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}
