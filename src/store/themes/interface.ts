import { Action } from 'redux';
import {
  SubredditType,
  Theme,
} from '../interface';

export enum FetchThemeActionsType {
  REQUEST_THEMES = 'THEMES/REQUEST_THEMES',
  DELETE_THEME = 'THEMES/DELETE_THEME',
  FETCH_THEME = 'THEMES/FETCH_THEME',
  LIKE_THEME = 'THEMES/LIKE_THEME',
  SHOW_LOADER = 'THEMES/SHOW_LOADER',
  HIDE_LOADER = 'THEMES/HIDE_LOADER',
}

export interface RequestThemeActionsInterface extends Action<FetchThemeActionsType> {
  type: FetchThemeActionsType.REQUEST_THEMES,
  payload: SubredditType,
}

export interface FetchThemeActionsInterface extends Action<FetchThemeActionsType> {
  type: FetchThemeActionsType.FETCH_THEME,
  payload: Theme,
}

export interface DeleteThemeActionsInterface extends Action<FetchThemeActionsType> {
  type: FetchThemeActionsType.DELETE_THEME,
  payload: Theme['id'],
}

export interface LikeThemeActionsInterface extends Action<FetchThemeActionsType> {
  type: FetchThemeActionsType.LIKE_THEME,
  payload: Theme['id'],
}

export interface ShowLoaderActionsInterface extends Action<FetchThemeActionsType> {
  type: FetchThemeActionsType.SHOW_LOADER,
}

export interface HideLoaderActionsInterface extends Action<FetchThemeActionsType> {
  type: FetchThemeActionsType.HIDE_LOADER,
}

export type ThemeActions =
  RequestThemeActionsInterface |
  FetchThemeActionsInterface |
  DeleteThemeActionsInterface |
  LikeThemeActionsInterface |
  ShowLoaderActionsInterface |
  HideLoaderActionsInterface;
