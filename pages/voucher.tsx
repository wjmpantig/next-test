import React from 'react';
import { NextPage } from 'next';
import Error from './_error';
import { useQuery } from '@apollo/react-hooks';
import { GET_OFFER_BY_SLUG } from '../apollo/offer';
import withApollo from '../apollo/with-apollo';

interface Props {
  slug?: string,
  id?: number,
}

const Voucher:NextPage<Props> = ({slug, id}) => {
  const { error, loading, data } = useQuery(GET_OFFER_BY_SLUG, { variables: { slug }, fetchPolicy: 'cache-and-network' });
  if (error){
    return (<Error statusCode={500} />)
  }
  let offer = null;
  if (data) {
    offer = data.offerBySlug;
  }
  return (
    <>
      <h1>voucher page</h1>
      <div>slug {slug}</div>
      <div>id { id }</div>
      {
        loading && (
          <div>loading...</div>
        )
      }
      {
        offer && (
          <div>title: { offer.title }</div>
        )
      }
    </>
  );
}

Voucher.getInitialProps = ({ query }):Props => query;

export default withApollo(Voucher);
