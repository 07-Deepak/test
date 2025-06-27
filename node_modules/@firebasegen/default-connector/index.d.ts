import { ConnectorConfig } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface Genre_Key {
  id: UUIDString;
  __typename?: 'Genre_Key';
}

export interface MovieGenre_Key {
  movieId: UUIDString;
  genreId: UUIDString;
  __typename?: 'MovieGenre_Key';
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface Rating_Key {
  id: UUIDString;
  __typename?: 'Rating_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Watchlist_Key {
  id: UUIDString;
  __typename?: 'Watchlist_Key';
}

