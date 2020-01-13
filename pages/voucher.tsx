import Error from 'next/error';
import { useQuery } from '@apollo/react-hooks';
import { GET_OFFER_BY_SLUG } from '../apollo/offer';

const Voucher = ({ slug, id}) =>{
  const { error, loading, data } = useQuery(GET_OFFER_BY_SLUG, { variables: { slug }, fetchPolicy: 'cache-and-network' });
  return (
    <>
      <h1>voucher page</h1>
      <div>slug {slug}</div>
      <div>id { id }</div>
    </>
  )
}

Voucher.getInitialProps = ({ query }) => query;

export default Voucher;