import { combineReducers } from 'redux';
import { themesReduser } from './themes/reduser';
import { buttonsReduser } from './buttons/reduser';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  themes: themesReduser,
  buttons: buttonsReduser,
});
