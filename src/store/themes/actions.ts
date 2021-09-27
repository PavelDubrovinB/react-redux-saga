import {
  Theme,
  SubredditType,
} from '../interface';
import {
  FetchThemeActionsType,
  LikeThemeActionsInterface,
  FetchThemeActionsInterface,
  DeleteThemeActionsInterface,
  HideLoaderActionsInterface,
  ShowLoaderActionsInterface,
  RequestThemeActionsInterface,
} from './interface';

export const requestTheme = (payload: SubredditType): RequestThemeActionsInterface => ({
  type: FetchThemeActionsType.REQUEST_THEMES,
  payload,
});

export const fetchTheme = (payload: Theme): FetchThemeActionsInterface => ({
  type: FetchThemeActionsType.FETCH_THEME,
  payload,
});

export const deleteTheme = (payload: Theme['id']): DeleteThemeActionsInterface => ({
  type: FetchThemeActionsType.DELETE_THEME,
  payload,
});

export const likeTheme = (payload: Theme['id']): LikeThemeActionsInterface => ({
  type: FetchThemeActionsType.LIKE_THEME,
  payload,
});

export const showLoader = (): ShowLoaderActionsInterface => ({ type: FetchThemeActionsType.SHOW_LOADER });

export const hideLoader = (): HideLoaderActionsInterface => ({ type: FetchThemeActionsType.HIDE_LOADER });
