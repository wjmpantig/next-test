import React from 'react';
import { NextPage, NextPageContext } from 'next';

interface ErrorPageProps {
  statusCode: string | number
}

const Error:NextPage<ErrorPageProps> = ( { statusCode = 404 }) =>(
  <p>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </p>
);
export default Error;
