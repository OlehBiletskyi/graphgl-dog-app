import { useQuery, useLazyQuery } from '@apollo/client';
import * as QUERIES from "../queries.gql";
// or separated import
// import { GET_ALL_DOGS, GET_DOG_BY_BREED } from '../queries.gql';

export const useGetAllDogs = (options) => {
  return useLazyQuery(QUERIES.GET_ALL_DOGS, {...options})
};

export const useGetDogByBreed = (options) => {
  return useQuery(QUERIES.GET_DOG_BY_BREED, {...options})
};