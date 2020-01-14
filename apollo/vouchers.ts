import gql from 'graphql-tag';

export const GET_VOUCHERS = gql`
{
  offersWithVouchers {
    id
    slug
    title
    price
    original_price
    behaviour_flag
    description
    vouchers {
      id
      price
      percent_discount
      purchased_count
      purchasable_quantity
      ribbon_copy
      status
    }
    photo_data {
      original_photo
      playlist_default_photo
      large_photo
    }
    listings {
      id
      name
      location
    }
    brand {
      name
      logo_data {
        default_photo
      }
    }
  }
}
`;

export const GET_PURCHASED_VOUCHERS_BY_OFFER = gql`
  query getPurchasedVouchers($id: Int!,$offer_id: Int) {
    purchasedVouchers(user_id: $id, offer_id: $offer_id) {
      id
    }
  }
`;

export default GET_VOUCHERS;
