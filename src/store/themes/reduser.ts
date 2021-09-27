import { ThemesState } from '../interface';
import {
  ThemeActions,
  FetchThemeActionsType,
} from './interface';

const initialState: ThemesState = {
  themes: [],
  loading: false,
};

export const themesReduser = (state = initialState, action: ThemeActions): ThemesState => {
  switch (action.type) {
    case FetchThemeActionsType.FETCH_THEME:
      return {
        ...state,
        themes: [...state.themes, {
          id: `${action.payload.id}_${Math.random().toString(36).substr(2, 9)}`,
          url: action.payload.url,
          like: false,
        }],
      };
    case FetchThemeActionsType.DELETE_THEME:
      return {
        ...state,
        themes: [...state.themes.filter((item) => item.id !== action.payload)],
      };
    case FetchThemeActionsType.LIKE_THEME:
      return {
        ...state,
        themes: [...state.themes.map((item) => {
          let newTheme = item;
          if (item.id === action.payload) {
            newTheme = {
              ...item, like: !item.like,
            };
          }
          return newTheme;
        })],
      };
    case FetchThemeActionsType.SHOW_LOADER:
      return {
        ...state, loading: true,
      };
    case FetchThemeActionsType.HIDE_LOADER:
      return {
        ...state, loading: false,
      };
    default: return state;
  }
};
