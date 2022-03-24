import { gql } from '@apollo/client';

export const GET_ALL_DOGS  = gql`
  query getAllGogs {
    dogs {
      id
      breed
      displayImage
      images {
        id
        url
      }
      subbreeds
    }
  }
`;

export const GET_DOG_BY_BREED = gql`
  query getDogByBreed($breed : String!) {
    dog(breed: $breed) {
      id
      breed
      displayImage
      images {
        id
        url
      }
      subbreeds
    }
  }
`;