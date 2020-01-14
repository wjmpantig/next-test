import gql from 'graphql-tag';

const OFFER_GQL = gql`
  query offer($offerId: ID!) {
    offer(id: $offerId) {
      title
      id
      photo_data {
        default_photo
      }
      brand {
        id
        description
      }
      listings {
          id
          location
      }
      vouchers{
        id
        price
        status
      }
    }
  }
`;

export const GET_OFFER_BY_SLUG = gql`
  query getOfferBySlug($slug: String!) {
    offerBySlug(slug: $slug) {
      id
      title
      prefix_copy
      description
      price
      original_price
      slug
      unlimited
      offer_limit
      notes
      offer
      photo_data {
        default_photo
        large_photo
        playlist_large_photo
      }
      status
      offer_limit
      listings {
        name
        location
        locality
        street
        slug
      }
      brand {
        name
        slug
        kind
        logo_data {
        default_photo
      }
      }
      vouchers {
        id
        price
        status
        purchasable_quantity
        percent_discount
      }
    }
  }
`;

export const GET_OFFER = gql`
  query getOfferById($id: ID!) {
    offer(id: $id) {
      id
      title
      prefix_copy
      description
      price
      original_price
      slug
      photo_data {
        default_photo
        large_photo
        playlist_large_photo
      }
      status
      offer_limit
      listings {
        id 
        name
        slug
        location
      }
      brand {
        name
        id
        slug
      }
    }
  }
`;

export default OFFER_GQL;
