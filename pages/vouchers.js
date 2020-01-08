import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { GET_VOUCHERS } from '../apollo/vouchers';

const Vouchers = () => {
  const { loading, error, data } = useQuery(GET_VOUCHERS, { fetchPolicy: 'cache-and-network' });
  if(error) {
    return (
      <div>{error}</div>
    )
  }
  const offersWithVouchers = !loading && data && data.offersWithVouchers;
  const filteredOffersWithVouchers = offersWithVouchers
    && offersWithVouchers.filter(offer => offer && offer.vouchers
      && offer.vouchers.length && offer.vouchers[0] !== null);
      console.log(filteredOffersWithVouchers)
  return (
    <div>
      <h1>vouchers</h1>
      <ul>
        {filteredOffersWithVouchers && 
          filteredOffersWithVouchers.map((offer) => offer.vouchers.filter((voucher, j) => j === 0 && 
            voucher.status === 'ACTIVE').map(voucher => (
          <li key={offer.id}>
            <Link href={`/vouchers/${offer.slug}-${voucher.id}/`}>
              <a>{offer.slug}-{voucher.id}</a>
            </Link>
          </li>
        )))
      }
      </ul>
    </div>
  )
}
export default Vouchers;