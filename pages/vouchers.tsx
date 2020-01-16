import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { GET_VOUCHERS } from '../apollo/vouchers';
import withApollo from '../apollo/with-apollo';

type Voucher = {
  id: number,
  status: string,
}
type Offer = {
  id: number,
  slug: string,
  vouchers: [Voucher],
};

const Vouchers:FunctionComponent = () => {
  const { loading, error, data } = useQuery(GET_VOUCHERS, { fetchPolicy: 'cache-and-network' });
  if(error) {
    return (
      <div>{error}</div>
    )
  }
  const offersWithVouchers = !loading && data && data.offersWithVouchers;
  const filteredOffersWithVouchers = offersWithVouchers
    && offersWithVouchers.filter((offer: Offer) => offer && offer.vouchers
      && offer.vouchers.length && offer.vouchers[0] !== null);
  return (
    <div>
      <h1>vouchers</h1>
      <ul>
        {filteredOffersWithVouchers && 
          filteredOffersWithVouchers.map((offer: Offer) => offer.vouchers.filter((voucher: Voucher, j: number) => j === 0 && 
            voucher.status === 'ACTIVE').map((voucher:Voucher) => (
          <li key={offer.id}>
            <Link href={`/vouchers/${offer.slug}-${voucher.id}/`}>
              <a>{offer.slug}-{voucher.id}</a>
            </Link>
          </li>
        )))
        }
        <li>
          <Link href="/vouchers/test-123" >
            <a>invalid slug test</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default withApollo(Vouchers);
